export type FaqItem = { question: string; answer: string };

export type FaqGroup = {
  id: "donor" | "ngo" | "volunteer";
  label: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    "id": "donor",
    "label": "Donor",
    "items": [
      {
        "question": "Who can register as a Donor on Fourth Idly?",
        "answer": "Anyone who wants to support an NGO's listed needs can register through the Donor option in the app and complete the required sign-up details."
      },
      {
        "question": "Does a Donor account require document approval?",
        "answer": "The Donor account is designed to become active after successful registration. NGO and Volunteer accounts have separate document-review requirements."
      },
      {
        "question": "How can I find an NGO that needs support?",
        "answer": "Sign in as a Donor and explore the available NGO Need Requests. Review the request details before choosing one to support."
      },
      {
        "question": "What is a Need Request?",
        "answer": "A Need Request is a request created by an approved NGO describing the items or support it needs. Donors can view available requests and decide whether to contribute."
      },
      {
        "question": "How do I make a donation through Fourth Idly?",
        "answer": "Open an available Need Request, review the details and follow the in-app steps to record or confirm your contribution."
      },
      {
        "question": "Can I choose which NGO or Need Request to support?",
        "answer": "Yes. You can review the available requests and choose a request that you are willing and able to support."
      },
      {
        "question": "How will I know what happens after I donate?",
        "answer": "The app provides relevant request-status notifications and communication features. You can follow the available updates associated with your contribution."
      },
      {
        "question": "What is the role of a Volunteer after I make a donation?",
        "answer": "A Volunteer can accept the related delivery task, coordinate pickup, collect the contribution and deliver it to the NGO."
      },
      {
        "question": "Is the delivery fee part of my donation?",
        "answer": "No. The donation supports the NGO's stated need. The delivery fee is a separate amount associated with the delivery process and is shown separately in the app where applicable."
      },
      {
        "question": "How can I share feedback about my experience?",
        "answer": "After the relevant interaction is completed, use the app's rating and feedback feature to share your experience."
      }
    ]
  },
  {
    "id": "ngo",
    "label": "NGO",
    "items": [
      {
        "question": "How can an NGO register on Fourth Idly?",
        "answer": "Choose the NGO option in the app, enter the organisation details and submit the required NGO registration or licence document for review."
      },
      {
        "question": "Can an NGO use all features immediately after registering?",
        "answer": "No. The NGO account must complete the required document-review and approval process before accessing approval-restricted features such as creating Need Requests."
      },
      {
        "question": "What documents are required for NGO verification?",
        "answer": "The current onboarding flow requires the NGO's relevant registration or licence document in PDF format, along with the requested organisation and contact details."
      },
      {
        "question": "How does an approved NGO create a Need Request?",
        "answer": "After approval, sign in to the NGO account and use the Need Request feature to describe the items or support required and submit the request details."
      },
      {
        "question": "What should an NGO include in a Need Request?",
        "answer": "Provide a clear description of the need and complete the fields requested in the app. Accurate, specific information helps Donors understand what support is required."
      },
      {
        "question": "How does an NGO receive support from Donors?",
        "answer": "Donors can browse available Need Requests and choose one to support. The app records the relevant donation and request activity."
      },
      {
        "question": "How is pickup and delivery coordinated?",
        "answer": "A Volunteer can accept an available delivery task, coordinate with the relevant participants, collect the contribution and deliver it to the NGO. In-app chat and notifications support coordination."
      },
      {
        "question": "How does an NGO confirm that a contribution has arrived?",
        "answer": "After receiving the contribution, the NGO should use the receipt-confirmation step in the app. This records that delivery has been received and helps complete the workflow."
      },
      {
        "question": "Can an NGO share updates about its activities and impact?",
        "answer": "Yes. NGOs can use the Impact Posts feature to share relevant updates about their work and the outcomes of community support."
      },
      {
        "question": "Can an NGO review or respond to feedback?",
        "answer": "The app supports ratings and feedback for relevant interactions. NGOs should use the available in-app features to review feedback and support a transparent experience."
      }
    ]
  },
  {
    "id": "volunteer",
    "label": "Volunteer",
    "items": [
      {
        "question": "How can I register as a Volunteer?",
        "answer": "Choose the Volunteer option, complete the registration details and submit the required driving-licence document and UPI ID as requested in the app."
      },
      {
        "question": "Does a Volunteer account become active immediately?",
        "answer": "Volunteer delivery access is subject to the required driving-licence review and approval. Follow the status shown in the app."
      },
      {
        "question": "Why does Fourth Idly ask for my driving licence?",
        "answer": "The driving-licence document is part of the Volunteer verification process for users who take on pickup and delivery tasks."
      },
      {
        "question": "Why do I need to provide a UPI ID?",
        "answer": "The Volunteer onboarding flow collects a UPI ID for delivery-related payment coordination where applicable. Use the payment details and instructions displayed in the app."
      },
      {
        "question": "How can I find delivery tasks?",
        "answer": "After approval, open the Volunteer section and view the available delivery tasks shown in the app."
      },
      {
        "question": "What happens when I accept a delivery task?",
        "answer": "The task is assigned to you according to the app's workflow. Review the pickup and delivery details, then coordinate with the relevant participant before proceeding."
      },
      {
        "question": "What am I expected to do during pickup?",
        "answer": "Coordinate the pickup, collect the donor's contribution as described in the task and handle the items responsibly while preparing for delivery to the NGO."
      },
      {
        "question": "How is the delivery fee handled?",
        "answer": "Where a delivery fee applies, follow the UPI or QR payment instructions displayed for the task. The app provides an \"I've paid\" confirmation step after payment."
      },
      {
        "question": "What should I do if my delivery-fee payment is not verified?",
        "answer": "Use the in-app dispute or support process where available and provide the relevant payment details. The issue can then be reviewed through the platform's administrative process."
      },
      {
        "question": "When is my delivery task considered complete?",
        "answer": "After delivering the contribution to the NGO, the NGO must confirm receipt in the app. Relevant task status updates and the available rating or feedback feature help close the interaction."
      }
    ]
  }
];