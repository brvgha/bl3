import { dev } from "$app/environment";
import { ADMIN, ADMINPASSWORD } from "$env/static/private";
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
            //const session = await rosterService.login(email, password);
            const session = username === ADMIN && password === ADMINPASSWORD;
            if (session) {
                /*const userJson = JSON.stringify(session);
                cookies.set("roster-user", userJson, {
                    path: "/",
                    httpOnly: true,
                    sameSite: "strict",
                    secure: !dev,
                    maxAge: 60 * 60 * 24 * 7 // one week
                });*/
                console.log("Login successful, redirecting to Dashboard");
                throw redirect(303, "/dashboard");
            } else {
                throw redirect(307, "/");
            }
        }
    }
};
