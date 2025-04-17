import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faqs = [
    {
      question: 'How can I enroll in a course?',
      answer:
        'To enroll, simply sign up and click on the "Enroll" button on the course page.',
      isOpen: true,
    },
    {
      question: 'Are the courses available anytime?',
      answer:
        'Yes, all our courses are available 24/7 so you can learn at your own pace.',
      isOpen: false,
    },
    {
      question: 'Do the courses come with a certification?',
      answer:
        'Yes, each completed course includes a certificate of achievement.',
      isOpen: false,
    },
    {
      question: 'What types of courses do you offer?',
      answer:
        'We offer a wide range: tech, business, design, personal development, and ..',
      isOpen: false,
    },
    {
      question: 'Is there a money-back guarantee?',
      answer:
        'Absolutely! You have 14 days to request a full refund if you’re not satisfied.',
      isOpen: false,
    },
  ];

  toggleFAQ(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index ? !faq.isOpen : false;
    });
  }
}
