-- Revoke public execution of has_role function
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM public;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM authenticated;

-- Ensure it's executable by the owner (postgres) and service_role
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO postgres;

-- Explicitly allow admins to view all rows in user_roles (resolving info 1)
CREATE POLICY "Admins can view all user roles" ON public.user_roles
    FOR SELECT TO authenticated
    USING (public.has_role(auth.uid(), 'admin'));
