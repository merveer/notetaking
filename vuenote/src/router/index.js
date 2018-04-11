import Vue from "vue";
import Router from "vue-router";
import notes from "@/components/notes.vue";
import mainPage from "@/components/mainPage.vue";
import noteForm from "@/components/noteForm.vue";
import editNote from "@/components/editNote.vue";
import addNote from "@/components/addNote.vue";
import signUp from "@/components/signUp.vue";
import login from "@/components/login.vue";
import search from "@/components/search.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "mainPage",
            component: mainPage,
        },
        {
            path: "/notes",
            name: "notes",
            component: notes,
        },
        {
            path: "/noteForm",
            name: "noteForm",
            component: noteForm,
        },
        {
            path: "/editNote/:id",
            name: "editNote",
            component: editNote,
            props: true,
        },
        {
            path: "/addNote",
            name: "addNote",
            component: addNote,
        },
        {
            path: "/signUp",
            name: "signUp",
            component: signUp,
        },
        {
            path: "/login",
            name: "login",
            component: login,
        },
        {
            path: "/search",
            name: "search",
            component: search,
        },
    ],
});
