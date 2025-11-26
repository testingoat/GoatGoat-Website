import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-emerald-500/30 selection:text-emerald-200">
            <Header />
            <main className="flex-1 container mx-auto px-6 sm:px-10 max-w-4xl py-20">
                <h1 className="text-3xl font-bold mb-8 text-slate-100">Privacy Policy</h1>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">1. Introduction</h2>
                        <p>
                            Goat ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Seller App. Please read this privacy policy carefully.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">2. Information We Collect</h2>
                        <p className="mb-2">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-slate-200">Personal Information:</strong> Name, email address, phone number</li>
                            <li><strong className="text-slate-200">Business Information:</strong> Store name, address, GST number</li>
                            <li><strong className="text-slate-200">Financial Information:</strong> Bank account details, IFSC code</li>
                            <li><strong className="text-slate-200">Product Information:</strong> Product listings, images, descriptions, prices</li>
                            <li><strong className="text-slate-200">Transaction Data:</strong> Order history, sales data, payment information</li>
                            <li><strong className="text-slate-200">Device Information:</strong> Device type, operating system, unique device identifiers</li>
                            <li><strong className="text-slate-200">Location Data:</strong> Store location, delivery area</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">3. How We Use Your Information</h2>
                        <p className="mb-2">We use the information we collect to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and customer service requests</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Detect, prevent, and address technical issues and fraudulent activities</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="mb-2">We may share your information in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-slate-200">With Customers:</strong> Your store name, location, and product information</li>
                            <li><strong className="text-slate-200">With Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                            <li><strong className="text-slate-200">For Legal Reasons:</strong> To comply with legal obligations or protect our rights</li>
                            <li><strong className="text-slate-200">With Your Consent:</strong> When you explicitly agree to share information</li>
                        </ul>
                        <p className="mt-2">We do not sell your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">6. Data Retention</h2>
                        <p>
                            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">7. Your Rights</h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing of your information</li>
                            <li>Request data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">8. Push Notifications</h2>
                        <p>
                            We may send you push notifications regarding orders, updates, and promotional offers. You can opt-out of receiving push notifications by changing your device settings or through the App settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">9. Location Information</h2>
                        <p>
                            We collect and use your store location to display your store to nearby customers and facilitate order delivery. You can control location permissions through your device settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">10. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our App and hold certain information. You can instruct your device to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">11. Third-Party Services</h2>
                        <p>
                            Our App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">12. Children's Privacy</h2>
                        <p>
                            Our App is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">13. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">14. Contact Us</h2>
                        <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul className="list-none space-y-1">
                            <li><strong className="text-slate-200">Email:</strong> privacy@goatgoat.com</li>
                            <li><strong className="text-slate-200">Phone:</strong> +91 99 6738 9263</li>
                            <li><strong className="text-slate-200">Address:</strong> Belgaum, Karnataka, India</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-emerald-400 mb-4">15. Compliance with Indian Laws</h2>
                        <p>
                            This Privacy Policy is designed to comply with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
