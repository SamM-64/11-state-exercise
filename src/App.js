import React from 'react';

export default function SignupForm() {
  // states here

  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  const display = (e) => {
    e.preventDefault();
    console.log(form.name, form.email);
  };

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          placeholder="Mary"
          value={form.name}
          onChange={updateField}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
          value={form.email}
          onChange={updateField}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
