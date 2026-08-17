import { supabase } from "@/integrations/supabase/client";

export type SubmissionKind = "contact" | "booking" | "second-opinion";

export interface Submission {
  id: string;
  kind: SubmissionKind;
  createdAt: string; // ISO
  data: Record<string, string>;
}

export async function addSubmission(kind: SubmissionKind, data: Record<string, unknown>) {
  const clean: Record<string, string> = {};
  Object.entries(data).forEach(([k, v]) => {
    clean[k] = v == null ? "" : String(v);
  });

  const { error } = await supabase.from("submissions").insert({
    kind,
    data: clean,
  });

  if (error) {
    console.error("Error adding submission:", error);
    throw error;
  }
}

export async function getAll(): Promise<Submission[]> {
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching submissions:", error);
    return [];
  }

  return data.map((s) => ({
    id: s.id,
    kind: s.kind as SubmissionKind,
    createdAt: s.created_at,
    data: s.data as Record<string, string>,
  }));
}

export async function removeSubmission(id: string) {
  const { error } = await supabase.from("submissions").delete().eq("id", id);
  if (error) {
    console.error("Error deleting submission:", error);
    throw error;
  }
}

// CSV helpers
function esc(v: string) {
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

export function toCSV(rows: Submission[]): string {
  const cols = new Set<string>();
  rows.forEach((r) => Object.keys(r.data).forEach((k) => cols.add(k)));
  const headers = ["id", "kind", "createdAt", ...Array.from(cols)];
  const lines = [headers.join(",")];
  rows.forEach((r) => {
    lines.push(
      headers
        .map((h) => {
          if (h === "id" || h === "kind" || h === "createdAt") return esc((r as any)[h]);
          return esc(r.data[h] ?? "");
        })
        .join(","),
    );
  });
  return lines.join("\n");
}

export function downloadCSV(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
