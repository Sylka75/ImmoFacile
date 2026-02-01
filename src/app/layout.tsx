import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Immo Facile - Dashboard',
    description: 'Gestion immobilière augmentée par IA',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body>
                <div className="min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    )
}
