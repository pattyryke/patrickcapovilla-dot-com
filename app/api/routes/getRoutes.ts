import { notFound } from 'next/navigation';
import type { Route } from './route';

import 'server-only';


export async function getRoutes({ parent }: { parent?: string } = {}) {
    const res = await fetch(
        `http://localhost:3000/api/routes${
            parent ? `?parent=${parent}` : ''
        }`,
    );

    if (!res.ok) {
        throw new Error('Something went wrong!');
    }

    const routes = (await res.json()) as Route[];

    if (routes.length === 0) {
        notFound();
    }

    return routes;
}


export async function getRoute({ slug }: { slug?: string }) {
    const res = await fetch(
        `http://localhost:3000/api/routes${
            slug ? `?slug=${slug}` : ''
        }`,
    );

    if (!res.ok) {
        throw new Error('Something went wrong!');
    }

    const route = (await res.json()) as Route;

    if (!route) {
        notFound();
    }

    return route;
}