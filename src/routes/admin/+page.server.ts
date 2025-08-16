import { apiService } from "$lib/services/api-service.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    admin: async ({ request }) => {
        const form = await request.formData();
        const username = form.get("username") as string;
        const password = form.get("password") as string;
        if (!username || !password) {
            return fail(400, { message: "Username and password are required" });
            // return { message: "Username and password are required" };
        } else {
            console.log(`attempting to log in email: ${username} with password: ${password}`);
            const result = await apiService.login(username, password);
            console.log("Login result:", result);
            if (result) {
                console.log("Login successful, redirecting to Dashboard");
                throw redirect(303, "/dashboard");
            } else {
                console.error("Login failed, redirecting to home");
                return fail(401, { message: "Invalid username or password" });
                // return { message: "Invalid username or password" };
            }
        }
    }
};
