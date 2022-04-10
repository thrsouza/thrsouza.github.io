import { useState } from "react";

import { SectionType } from "@/@types/containers/Section";
import { Heading2 } from "@/components/Heading";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import styles from "./styles.module.css";

enum SubmitStatus {
  neutral,
  success,
  error,
}

export function Contact({ id, title }: SectionType) {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.neutral
  );

  const submitHandleClick = async (event: any) => {
    event.preventDefault();
    setSubmitStatus(SubmitStatus.neutral);
    setMessage("Sending message...");
    setIsLoading(true);

    const data: any = {};
    const formData = new FormData(event.target);
    formData.forEach((value, key) => (data[key] = value));

    try {
      const response = await fetch(event.target.action, {
        headers: { "Content-Type": "application/json" },
        method: event.target.method,
        body: JSON.stringify(data),
      });

      const reponseJson = await response.json();
      if (reponseJson.ok) {
        setIsLoading(false);
        setSubmitStatus(SubmitStatus.success);
        setMessage(reponseJson.message);
        event.target.reset();
      } else {
        setIsLoading(false);
        setSubmitStatus(SubmitStatus.error);
        setMessage(reponseJson.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setSubmitStatus(SubmitStatus.error);
      setMessage("Oops! I'm surprised... Please try again later :/");
    }
  };

  return (
    <section id={id} className={styles.contactSection}>
      <div>
        <Heading2 text={title} />
        <form
          onSubmit={submitHandleClick}
          action="https://thrsouza-api.herokuapp.com/api/message"
          acceptCharset="utf-8"
          method="post"
        >
          <fieldset>
            <div>
              <Input
                type="text"
                name="name"
                label="Full Name"
                placeholder="Your name..."
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Input
                type="multiline"
                name="message"
                label="Message"
                placeholder="Feel free..."
                required
              />
            </div>
            <Button
              text="Send Message"
              size="large"
              submit
              disabled={isLoading}
            />
            <p
              style={{
                color:
                  submitStatus === SubmitStatus.success
                    ? "#22ff88"
                    : submitStatus === SubmitStatus.error
                    ? "#ff5566"
                    : "",
              }}
            >
              {message}
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
