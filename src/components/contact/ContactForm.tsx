"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
    User,
    Mail,
    Phone,
    FileText,
    MessageSquare,
} from "lucide-react";

import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";
import SubmitButton from "./SubmitButton";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        setErrors((prev) => ({
            ...prev,
            [e.target.name]: "",
        }));
    };

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 20) {
            newErrors.message =
                "Message should be at least 20 characters.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fix the errors in the form.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            toast.success("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setErrors({});
        } catch (error: any) {
            toast.error(error.message || "Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-7"
        >
            {/* ================= Name & Email ================= */}

            <div className="grid gap-6 md:grid-cols-2">

                <FloatingInput
                    name="name"
                    type="text"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    icon={<User size={20} />}
                    error={errors.name}
                    autoComplete="name"
                />

                <FloatingInput
                    name="email"
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    icon={<Mail size={20} />}
                    error={errors.email}
                    autoComplete="email"
                />

            </div>

            {/* ================= Phone & Subject ================= */}

            <div className="grid gap-6 md:grid-cols-2">

                <FloatingInput
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    icon={<Phone size={20} />}
                    error={errors.phone}
                    autoComplete="tel"
                />

                <FloatingInput
                    name="subject"
                    type="text"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    icon={<FileText size={20} />}
                    error={errors.subject}
                />

            </div>

            {/* ================= Message ================= */}

            <FloatingTextarea
                name="message"
                label="Your Message"
                value={formData.message}
                onChange={handleChange}
                icon={<MessageSquare size={20} />}
                error={errors.message}
                maxLength={500}
            />

            {/* Submit Button will come in Part 4C */}

            <div className="pt-2">
                <SubmitButton loading={loading} />
            </div>
        </form>
    );
}