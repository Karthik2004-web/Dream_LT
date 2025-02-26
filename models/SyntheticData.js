// // models/SyntheticData.js
// import mongoose from "mongoose";

// const featureSchema = new mongoose.Schema({
//   name: String,
//   datatype: String,
//   range_or_mean: String,
//   std_dev: String
// });

// const syntheticDataSchema = new mongoose.Schema({
//   model_description: String,
//   data: {
//     type: String,
//     output_format: String,
//     distribution: String,
//     linearity_ratio: String,
//     num_samples: Number,
//     features: [featureSchema]
//   },
//   target: {
//     type: String,
//     features: [featureSchema],
//     classes: [String]
//   }
// }, { timestamps: true });

// export default mongoose.models.SyntheticData || mongoose.model("SyntheticData", syntheticDataSchema);
import mongoose from "mongoose";

// Define Feature Schema
const featureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // datatype: { type: String, required: true, enum: ["float", "integer", "string"] },
  range_or_mean: { type: String, default: "" },
  std_dev: { type: String, default: "" },
});

// Define Main Synthetic Data Schema
const syntheticDataSchema = new mongoose.Schema(
  {
    model_description: { type: String, required: true },
    data: {
      type: { type: String, required: true, enum: ["labeled", "unlabeled"] },
      output_format: { type: String, required: true, enum: ["json", "csv"] },
      distribution: { type: String, required: true, enum: ["gaussian", "uniform", "exponential","normal","linear"] },
      linearity_ratio: { type: String, default: "" },
      num_samples: { type: Number, required: true, min: 1 },
      features: [featureSchema],
    },
    target: {
      type: { type: String, required: true, enum: ["classification", "prediction"] },
      features: [featureSchema],
      classes: { type: [String], default: [] },
    },
  },
  { timestamps: true } // Automatically add createdAt & updatedAt
);

// Prevent model recompilation in Next.js
export default mongoose.models.SyntheticData || mongoose.model("SyntheticData", syntheticDataSchema);
