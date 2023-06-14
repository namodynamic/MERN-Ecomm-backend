// const Flutterwave = require("flutterwave-node-v3");
// const flw = new Flutterwave(
//   process.env.FLW_PUBLIC_KEY,
//   process.env.FLW_SECRET_KEY
// );

// const checkout = async (req, res) => {
//   const { amount } = req.body;
//   const option = {
//     amount: amount,
//     currency: "NGN",
//   };
//   try {
//     const order = await flw.Orders.create(option);
//     res.json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: "Failed to create order",
//     });
//   }
// };

// const paymentVerification = async (req, res) => {
//   const { flutterwaveOrderId, flutterwavePaymentId } = req.body;

//   try {
//     const paymentDetails = await flw.Transaction.verify(flutterwavePaymentId);

//     if (paymentDetails.status === "success") {
//       // Payment is verified successfully
//       // Perform necessary actions like updating the order status, sending notifications, etc.
//       res.json({
//         success: true,
//         message: "Payment verified",
//         paymentDetails,
//       });
//     } else {
//       // Payment verification failed
//       // Handle the failure scenario
//       res.json({
//         success: false,
//         message: "Payment verification failed",
//         paymentDetails,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: "Failed to verify payment",
//     });
//   }
// };

// module.exports = { checkout, paymentVerification };
