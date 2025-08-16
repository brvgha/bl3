import { apiService } from "$lib/services/api-service.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    admin: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get("username") as string;
        const password = form.get("password") as string;
        if (username === "" || password === "") {
            throw redirect(307, "/");
        } else {
            console.log(`attempting to log in email: ${username} with password: ${password}`);
            const result = await apiService.login(username, password);
            console.log("Login result:", result);
            if (result === true) {
                console.log("Login successful, redirecting to Dashboard");
                throw redirect(303, "/dashboard");
            } else {
                console.error("Login failed, redirecting to home");
                return {message:"Invalid username or password"};
            }
        }
    }
};
