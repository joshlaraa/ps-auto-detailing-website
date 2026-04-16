"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldInput, FieldTextarea } from "@/components/ui/field";

export function ContactInquiryForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const vehicle = String(fd.get("vehicle") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent("Website inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nVehicle: ${vehicle}\n\n${message}`,
    );
    window.location.href = `mailto:studio@precisionlabs.auto?subject=${subject}&body=${body}`;
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field id="contact-name" label="Operator identity">
          <FieldInput
            id="contact-name"
            name="name"
            placeholder="Full name"
            type="text"
            autoComplete="name"
            required
          />
        </Field>
        <Field id="contact-email" label="Communication node">
          <FieldInput
            id="contact-email"
            name="email"
            placeholder="Email address"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>
      <Field id="contact-vehicle" label="Vehicle specification">
        <FieldInput
          id="contact-vehicle"
          name="vehicle"
          placeholder="Year, make, model"
          type="text"
          autoComplete="off"
        />
      </Field>
      <Field id="contact-message" label="Detailing requirements">
        <FieldTextarea
          id="contact-message"
          name="message"
          placeholder="Outline specific restoration or protection objectives…"
          rows={5}
          required
        />
      </Field>
      <div className="pt-4">
        <Button variant="formSubmit" type="submit">
          Initialize protocol
        </Button>
      </div>
    </form>
  );
}
