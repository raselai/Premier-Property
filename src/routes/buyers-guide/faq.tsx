/**
 * FAQ Route
 * Frequently Asked Questions
 */

import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { SuspenseLoader } from '@/components/SuspenseLoader/SuspenseLoader';

const FAQPage = lazy(() =>
    import('@/components/FAQPage/FAQPage').then((module) => ({
        default: module.FAQPage,
    }))
);

export const Route = createFileRoute('/buyers-guide/faq')({
    component: FAQPageRoute,
    loader: () => ({
        crumb: 'FAQ',
    }),
});

function FAQPageRoute() {
    return (
        <SuspenseLoader minHeight='calc(100vh - 64px)'>
            <FAQPage />
        </SuspenseLoader>
    );
}

export default FAQPageRoute;
