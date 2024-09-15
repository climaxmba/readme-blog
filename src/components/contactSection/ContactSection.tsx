"use client";
import { FormEventHandler, useEffect, useState } from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import styles from "./contactSection.module.scss";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (error) setError(null);
      if (success) setSuccess(null);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [error, success]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Validate values before sending
    const dataObject = Object.fromEntries(data);
    if (dataObject.name && dataObject.email && dataObject.message) {
      const response = await fetch("/__contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as URLSearchParams
        ).toString(),
      });

      // Success & error handling
      if (response.ok) {
        setError(null);
        form.reset();
        setSuccess("Thanks! Your entry has been recorded.");
      } else {
        setError(`Error: ${response.status} ${response.statusText}`);
      }
    } else {
      setError("An error occured!");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1>Contact Us</h1>

      {error ? (
        <div className={styles.error}>{error}</div>
      ) : success ? (
        <div className={styles.success}>{success}</div>
      ) : (
        <></>
      )}

      <form
        action="/"
        name="contact"
        onSubmit={handleSubmit}
        method="post"
        className={styles.form}
        {...{ "data-netlify": "true" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name:
          <input type="text" name="name" placeholder="Alex Smith" autoComplete="name" required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="alexsmith@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your message goes here..."
            required
          ></textarea>
        </label>

        {submitting ? (
          <Button type="submit" variant="contained" disabled>
            Submitting...
          </Button>
        ) : (
          <Button title="Submit" type="submit" variant="contained">
            Submit
          </Button>
        )}
      </form>
    </section>
  );
}
