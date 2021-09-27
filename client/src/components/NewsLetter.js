import React, { useState } from 'react';

export default function NewsLetter() {
  const [formState, setFormState] = useState({email: ''});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormState({email: ''})
  }
  return (
    <section class="newsletter section">
                <div class="container-sm">
                    <div class="newsletter-inner section-inner">
                        <div class="newsletter-header text-center">
                            <h2 class="section-title mt-0">Connect</h2>
                            <p class="section-paragraph">Stay updated with latest art news.</p>
                        </div>
                        
						
						<form onSubmit={handleFormSubmit} class="footer-form newsletter-form field field-grouped">
                            <div class="control control-expanded">
                                <input class="input" onChange={handleChange} type="email" name="email" placeholder="Your best email&hellip;" />
                            </div>
                            <div class="control">
                                <button type='submit' class="button button-primary button-block button-shadow" href="/#">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    </section>
  )
}