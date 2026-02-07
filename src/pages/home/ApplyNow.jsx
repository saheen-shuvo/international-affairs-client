// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, HelpCircle } from "lucide-react";
import Swal from "sweetalert2";

const GOOGLE_SHEET_API =
  "https://script.google.com/macros/s/AKfycbwiKy5rOVveb4GExwt3XnGRggtaGy_hrLYK-PpIwxtl6MzSyZiR9Yx_YOAK184fd5uo/exec";
const TOKEN = "IA_SECRET_123";

const departments = [
  "Computer Science & Engineering",
  "Electrical & Electronic Engineering",
  "Business Administration",
  "Pharmacy",
  "Law",
  "English",
  "Journalism & Mass Communication",
  "Architecture",
  "Civil Engineering",
  "Textile Engineering",
];

const semesters = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
];

const programs = [
  "Student Exchange Program",
  "Credit Transfer Program",
  "Summer Program",
  "Research Collaboration",
  "Joint Degree Program",
  "Internship Abroad",
];

const Field = ({ label, error, children }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-foreground">{label}</label>
    {children}
    {error ? <p className="text-xs text-red-500">{error}</p> : null}
  </div>
);

const ApplyNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [generalLoading, setGeneralLoading] = useState(false);
  const [queryLoading, setQueryLoading] = useState(false);

  const {
    register: gRegister,
    handleSubmit: gHandleSubmit,
    reset: gReset,
    formState: { errors: gErrors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      studentId: "",
      currentSemester: "",
      department: "",
      cgpa: "",
      program: "",
      description: "",
    },
  });

  const {
    register: qRegister,
    handleSubmit: qHandleSubmit,
    reset: qReset,
    formState: { errors: qErrors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      studentId: "",
      department: "",
      query: "",
    },
  });

  const onGeneralSubmit = async (data) => {
    try {
      setGeneralLoading(true);

      const res = await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: TOKEN,
          type: "general",
          ...data,
        }),
      });

      const result = await res.json();
      if (!result.ok) throw new Error(result.error || "Failed");

      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "We’ll review your application and get back to you soon.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#2563eb",
      });

      gReset();
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: e?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setGeneralLoading(false);
    }
  };

  const onQuerySubmit = async (data) => {
    try {
      setQueryLoading(true);

      await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          token: TOKEN,
          type: "query",
          ...data,
        }),
      });

      Swal.fire({
        icon: "success",
        title: "Query Submitted!",
        text: "Our team will respond to your query shortly.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#2563eb",
      });

      qReset();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setQueryLoading(false);
    }
  };

  return (
    <section
      id="apply"
      className="max-w-screen-xl mx-auto mt-8 md:mt-16 px-2 overflow-x-hidden"
    >
      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Apply Now & Ask a Query
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-2">
            Whether you're ready to apply or just have questions, we're here to
            help!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* General Apply */}
          <motion.div
            className="flex-1 bg-card rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  General Apply
                </h3>
                <p className="text-sm text-muted-foreground">
                  Apply for international programs
                </p>
              </div>
            </div>

            <form
              onSubmit={gHandleSubmit(onGeneralSubmit)}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" error={gErrors?.name?.message}>
                  <input
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="John Doe"
                    {...gRegister("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Min 2 chars" },
                    })}
                  />
                </Field>

                <Field label="Email" error={gErrors?.email?.message}>
                  <input
                    type="email"
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="john@example.com"
                    {...gRegister("email", { required: "Email is required" })}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Student ID" error={gErrors?.studentId?.message}>
                  <input
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="e.g., 201-15-12345"
                    {...gRegister("studentId", {
                      required: "Student ID is required",
                    })}
                  />
                </Field>

                <Field
                  label="Current Semester"
                  error={gErrors?.currentSemester?.message}
                >
                  <select
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    {...gRegister("currentSemester", {
                      required: "Select semester",
                    })}
                  >
                    <option value="">Select semester</option>
                    {semesters.map((s) => (
                      <option key={s} value={s}>
                        {s} Semester
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Department" error={gErrors?.department?.message}>
                  <select
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    {...gRegister("department", {
                      required: "Select department",
                    })}
                  >
                    <option value="">Select department</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="CGPA" error={gErrors?.cgpa?.message}>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="e.g., 3.50"
                    {...gRegister("cgpa", {
                      required: "CGPA is required",
                      validate: (v) => {
                        const n = parseFloat(v);
                        if (Number.isNaN(n)) return "Enter a number";
                        if (n < 0 || n > 4) return "CGPA must be 0-4";
                        return true;
                      },
                    })}
                  />
                </Field>
              </div>

              <Field label="Program" error={gErrors?.program?.message}>
                <select
                  className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  {...gRegister("program", { required: "Select program" })}
                >
                  <option value="">Select program</option>
                  {programs.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Description" error={gErrors?.description?.message}>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us about yourself and why you're interested..."
                  {...gRegister("description", {
                    required: "Description is required",
                    minLength: { value: 10, message: "Min 10 chars" },
                  })}
                />
              </Field>

              <button
                type="submit"
                disabled={generalLoading}
                className="w-full h-11 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {generalLoading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>

          {/* Query Form */}
          <motion.div
            className="flex-1 bg-card rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Have a Query?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ask us anything about our programs
                </p>
              </div>
            </div>

            <form onSubmit={qHandleSubmit(onQuerySubmit)} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" error={qErrors?.name?.message}>
                  <input
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="John Doe"
                    {...qRegister("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Min 2 chars" },
                    })}
                  />
                </Field>

                <Field label="Email" error={qErrors?.email?.message}>
                  <input
                    type="email"
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="john@example.com"
                    {...qRegister("email", { required: "Email is required" })}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Student ID" error={qErrors?.studentId?.message}>
                  <input
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="e.g., 201-15-12345"
                    {...qRegister("studentId", {
                      required: "Student ID is required",
                    })}
                  />
                </Field>

                <Field label="Department" error={qErrors?.department?.message}>
                  <select
                    className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    {...qRegister("department", {
                      required: "Select department",
                    })}
                  >
                    <option value="">Select department</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Your Query" error={qErrors?.query?.message}>
                <textarea
                  rows={6}
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="What would you like to know?"
                  {...qRegister("query", {
                    required: "Query is required",
                    minLength: { value: 10, message: "Min 10 chars" },
                  })}
                />
              </Field>

              <button
                type="submit"
                disabled={queryLoading}
                className="w-full h-11 rounded-xl bg-secondary text-white font-medium flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <HelpCircle className="w-4 h-4" />
                {queryLoading ? "Submitting..." : "Submit Query"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
