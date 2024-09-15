"use client";
import { FormEventHandler, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { routes } from "@/lib/constants";
import styles from "./feedbackForm.module.scss";
import MuiTheme from "../MuiTheme/MuiTheme";

export default function FeedbackForm({ blogTitle }: { blogTitle: string }) {
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
      const response = await fetch("/__feedback.html", {
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
        setSuccess("Thanks for your feedback.");
      } else {
        setError(`Error: ${response.status} ${response.statusText}`);
      }
    } else {
      setError("An error occured!");
    }
    setSubmitting(false);
  };

  return (
    <section id={routes.contact.slice(1)} className={styles.container}>
      <h1>Leave your Feedback</h1>

      {error ? (
        <div className={styles.error}>{error}</div>
      ) : success ? (
        <div className={styles.success}>{success}</div>
      ) : (
        <></>
      )}

      <form
        action="/"
        name="feedback"
        onSubmit={handleSubmit}
        method="post"
        className={styles.form}
        {...{ "data-netlify": "true" }}
      >
        <input type="hidden" name="form-name" value="feedback" />
        <input name="blogTitle" type="hidden" value={blogTitle} />
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Alex Smith"
            autoComplete="name"
            required
          />
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

        <MuiTheme>
          {submitting ? (
            <Button type="submit" variant="contained" disabled>
              Submitting...
            </Button>
          ) : (
            <Button title="Submit" type="submit" variant="contained">
              Submit
            </Button>
          )}
        </MuiTheme>
      </form>
    </section>
  );
}
