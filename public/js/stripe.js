import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe('pk_test_s9qCsKErGhjYmsCGDKZ46PI700BJXwADi8');

export const bookTour = async (tourID) => {
  try {
    const session = await axios(
      `http://localhost:3000/bookings/checkout-session/${tourID}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
    console.log(err);
  }
};
