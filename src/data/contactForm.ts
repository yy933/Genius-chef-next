
const nameInput = {
  name: "name",
  label: "Name",
  placeholder: "Enter your name",
  type: "text",
} as const;

const emailInput = {
  name: "email",
  label: "Email",
  placeholder: "Enter your email",
  type: "email",
} as const

const subjectInput = {
  name: "subject",
  label: "Subject",
  placeholder: "Enter the subject of inquiry",
  type: "text",
} as const

const messageInput = {
  name: "message",
  label: "Message",
  placeholder: "Enter your message",
} as const

export {
  nameInput, emailInput, subjectInput, messageInput,
}
