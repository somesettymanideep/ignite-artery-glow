# Plan: Migrate to Lovable Cloud (Supabase) for Persistence

We will transition the application from using `localStorage` for submissions and admin authentication to using **Lovable Cloud** (Supabase). This will provide a secure database for bookings, contact messages, and second opinions, and enable real authentication for the admin panel.

## User-facing changes
- **Persistence**: All bookings and contact requests will be saved securely in the cloud, not just on the admin's browser.
- **Security**: The admin panel will use real user accounts instead of a hardcoded password.
- **Reliability**: Images and medical reports uploaded for second opinions will be stored reliably.

## Technical details
- **Database Schema**: Create a `submissions` table to store all form data as JSONB.
- **Authentication**: Enable email/password authentication.
- **Access Control**: Implement Row-Level Security (RLS) with a `user_roles` table to ensure only authorized admins can access submission data.
- **Code Refactor**: 
    - Update `src/lib/admin-store.ts` to use the Supabase client for all CRUD operations.
    - Update form components (`BookingModal`, `ContactPage`, `SecondOpinionPage`) to send data to the database.
    - Update the `/admin` route to use Supabase Auth for login/logout.
- **Static Assets**: Ensure all images continue to resolve correctly in the cloud environment.

## Steps
1. **Database Setup**: Apply migration to create `submissions` and `user_roles` tables.
2. **Auth Setup**: Configure email/password login.
3. **Data Layer**: Rewrite `src/lib/admin-store.ts` to wrap Supabase queries.
4. **UI Integration**: Update forms and the admin dashboard to use the new data layer.
5. **Role Assignment**: Add a manual step (or seed) to assign the `admin` role to the primary user.
