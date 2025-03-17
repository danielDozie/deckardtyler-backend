import author from "./author";
import postCategory from "./postCategory";
import client from "./client";
import comment from "./comment";
import documentManager from "./documentManager";
import project from "./project";
import menu from "./menu";
import message from "./message";
import page from "./page";
import post from "./post";
import research from "./research";
import service from "./service";
import siteSettings from "./siteSettings";
import subscriber from "./subscriber";
import teamMember from "./team";
import hero from "../component/hero";
import button from '../component/button';
import section from "../component/section";
import serviceComponent from "../component/serviceComponent";
import aboutComponent from "../component/aboutComponent";
import researchComponent from "../component/researchComponent";
import clientsComponent from "../component/clientsComponent";
import blogComponent from "../component/blogComponent";
import homeComponent from "../component/homeComponent";


export const schemaTypes = [
    author,
    postCategory,
    client,
    comment,
    documentManager,
    menu,
    message,
    page,
    post,
    research,
    project,
    service,
    siteSettings,
    subscriber,
    teamMember,

    //Reusable components for block contents
    section,
    hero,
    button,
    serviceComponent,
    aboutComponent,
    researchComponent,
    clientsComponent,
    blogComponent,
    homeComponent,
]