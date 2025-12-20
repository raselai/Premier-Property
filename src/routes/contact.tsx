/**
 * Contact Route
 * Displays the contact us page
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const ContactPage = lazy(() =>
    import('@/components/ContactPage/ContactPage').then((module) => ({
        default: module.ContactPage,
    }))
);

export const Route = createFileRoute('/contact')({
    component: ContactPageRoute,
});

function ContactPageRoute() {
    return (
        <SuspenseLoader>
            <ContactPage />
        </SuspenseLoader>
    );
}

export default ContactPageRoute;
