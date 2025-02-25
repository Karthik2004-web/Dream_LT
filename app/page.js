// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Home() {
//   const [formData, setFormData] = useState({
//     typeOfData: "",
//     numSamples: "",
//     numFeatures: "",
//     datasetType: "",
//     fileFormat: "",
//     range: "",
//     mean: "",
//     stdDev: "",
//     distributionType: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
//       <motion.div
//         className="w-full max-w-3xl p-8 bg-gray-900 rounded-2xl shadow-lg"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
//           Dataset Input Form
//         </h1>

//         <form className="space-y-4">
//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Type of Data (Float/List)</label>
//             <input
//               type="text"
//               name="typeOfData"
//               value={formData.typeOfData}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Float, List"
//             />
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Number of Samples</label>
//             <input
//               type="number"
//               name="numSamples"
//               value={formData.numSamples}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter number of samples"
//             />
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Number of Features</label>
//             <input
//               type="number"
//               name="numFeatures"
//               value={formData.numFeatures}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter number of features"
//             />
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Dataset Type (File Format)</label>
//             <input
//               type="text"
//               name="datasetType"
//               value={formData.datasetType}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., CSV, JSON"
//             />
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Expected Additional Values (Range, Mean, Std Dev)</label>
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 name="range"
//                 value={formData.range}
//                 onChange={handleChange}
//                 className="w-1/3 p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Range"
//               />
//               <input
//                 type="text"
//                 name="mean"
//                 value={formData.mean}
//                 onChange={handleChange}
//                 className="w-1/3 p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Mean"
//               />
//               <input
//                 type="text"
//                 name="stdDev"
//                 value={formData.stdDev}
//                 onChange={handleChange}
//                 className="w-1/3 p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Std Dev"
//               />
//             </div>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//             <label className="block text-gray-400">Type of Distribution</label>
//             <input
//               type="text"
//               name="distributionType"
//               value={formData.distributionType}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., Normal, Uniform"
//             />
//           </motion.div>

//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }



// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const DreamBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute left-16 top-12">
//       <motion.span 
//         className="text-8xl font-extralight tracking-wider text-white opacity-90"
//         style={{ 
//           fontFamily: 'Inter, system-ui, sans-serif',
//           letterSpacing: '0.1em'
//         }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         Dream
//       </motion.span>
//     </div>
//     <svg 
//       viewBox="0 0 800 600" 
//       className="absolute right-0 h-full w-2/3"
//       preserveAspectRatio="none"
//     >
//       <motion.path
//         initial={{ opacity: 0, pathLength: 0 }}
//         animate={{ opacity: 1, pathLength: 1 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         d="M300,0 L800,0 L800,600 L400,600 Q350,300 300,0"
//         fill="#0066ff"
//         opacity="0.8"
//       />
//     </svg>
//   </div>
// );

// export default function Home() {
//   const [formData, setFormData] = useState({
//     typeOfData: "",
//     numSamples: "",
//     numFeatures: "",
//     datasetType: "",
//     fileFormat: "",
//     range: "",
//     mean: "",
//     stdDev: "",
//     distributionType: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <DreamBackground />
//       {/* <div className="w-full flex justify-center pt-4"> */}
//       <div className="w-full flex justify-end pt-4 pr-24">
//         <motion.div
//           className="relative w-full max-w-3xl p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg mx-6"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
//             Synthetic Data Generator
//           </h1>

//           <form className="space-y-4">
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Type of Data (Float/List)</label>
//               <input
//                 type="text"
//                 name="typeOfData"
//                 value={formData.typeOfData}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Float, List"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Number of Samples</label>
//               <input
//                 type="number"
//                 name="numSamples"
//                 value={formData.numSamples}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter number of samples"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Number of Features</label>
//               <input
//                 type="number"
//                 name="numFeatures"
//                 value={formData.numFeatures}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter number of features"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Dataset Type (File Format)</label>
//               <input
//                 type="text"
//                 name="datasetType"
//                 value={formData.datasetType}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., CSV, JSON"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Expected Additional Values</label>
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   name="range"
//                   value={formData.range}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Range"
//                 />
//                 <input
//                   type="text"
//                   name="mean"
//                   value={formData.mean}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Mean"
//                 />
//                 <input
//                   type="text"
//                   name="stdDev"
//                   value={formData.stdDev}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Std Dev"
//                 />
//               </div>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Type of Distribution</label>
//               <input
//                 type="text"
//                 name="distributionType"
//                 value={formData.distributionType}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Normal, Uniform"
//               />
//             </motion.div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-green-600 transition duration-300"
//             >
//               Submit
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
//form submit
// "use client";

// import React, { useState } from 'react';
// import { motion } from "framer-motion";

// const FeatureInput = ({ feature, index, updateFeature, removeFeature }) => (
//   <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg">
//     <input
//       type="text"
//       placeholder="Feature name"
//       value={feature.name}
//       onChange={(e) => updateFeature(index, "name", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <select 
//       value={feature.datatype} 
//       onChange={(e) => updateFeature(index, "datatype", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     >
//       <option value="">Select data type</option>
//       <option value="float">Float</option>
//       <option value="integer">Integer</option>
//       <option value="string">String</option>
//     </select>
//     <input
//       type="text"
//       placeholder="Range or mean"
//       value={feature.range_or_mean}
//       onChange={(e) => updateFeature(index, "range_or_mean", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <input
//       type="text"
//       placeholder="Standard deviation"
//       value={feature.std_dev}
//       onChange={(e) => updateFeature(index, "std_dev", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <button
//       onClick={() => removeFeature(index)}
//       className="text-red-400 hover:text-red-300"
//     >
//       Remove Feature
//     </button>
//   </div>
// );

// export default function SyntheticDataGenerator() {
//   const [config, setConfig] = useState({
//     model_description: "",
//     data: {
//       type: "labeled",
//       output_format: "json",
//       distribution: "Gaussian",
//       linearity_ratio: "",
//       num_samples: "",
//       features: []
//     },
//     target: {
//       type: "prediction",
//       features: []
//     }
//   });

//   const [classes, setClasses] = useState("");

//   const updateFeature = (index, field, value, isTarget = false) => {
//     if (isTarget) {
//       const newFeatures = [...config.target.features];
//       newFeatures[index] = { ...newFeatures[index], [field]: value };
//       setConfig({
//         ...config,
//         target: { ...config.target, features: newFeatures }
//       });
//     } else {
//       const newFeatures = [...config.data.features];
//       newFeatures[index] = { ...newFeatures[index], [field]: value };
//       setConfig({
//         ...config,
//         data: { ...config.data, features: newFeatures }
//       });
//     }
//   };

//   const removeFeature = (index, isTarget = false) => {
//     if (isTarget) {
//       const newFeatures = config.target.features.filter((_, i) => i !== index);
//       setConfig({
//         ...config,
//         target: { ...config.target, features: newFeatures }
//       });
//     } else {
//       const newFeatures = config.data.features.filter((_, i) => i !== index);
//       setConfig({
//         ...config,
//         data: { ...config.data, features: newFeatures }
//       });
//     }
//   };

//   const addFeature = (isTarget = false) => {
//     const newFeature = {
//       name: "",
//       datatype: "",
//       range_or_mean: "",
//       std_dev: ""
//     };

//     if (isTarget) {
//       setConfig({
//         ...config,
//         target: {
//           ...config.target,
//           features: [...config.target.features, newFeature]
//         }
//       });
//     } else {
//       setConfig({
//         ...config,
//         data: {
//           ...config.data,
//           features: [...config.data.features, newFeature]
//         }
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const finalConfig = {...config};
//     if (config.target.type === "classification") {
//       finalConfig.target.classes = classes.split(",").map(c => c.trim());
//       delete finalConfig.target.features;
//     }
//     console.log(JSON.stringify(finalConfig, null, 2));
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <div className="w-full max-w-4xl mx-auto p-8">
//         <motion.div
//           className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
//             Synthetic Data Generator
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <input
//               type="text"
//               placeholder="Enter model description"
//               value={config.model_description}
//               onChange={(e) => setConfig({ ...config, model_description: e.target.value })}
//               className="w-full p-2 rounded bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//             />

//             <div className="space-y-2">
//               <label className="block text-gray-300">Dataset Type</label>
//               <div className="space-x-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     value="labeled"
//                     checked={config.data.type === "labeled"}
//                     onChange={(e) => setConfig({
//                       ...config,
//                       data: { ...config.data, type: e.target.value }
//                     })}
//                     className="mr-2"
//                   />
//                   <span>Labeled</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     value="unlabeled"
//                     checked={config.data.type === "unlabeled"}
//                     onChange={(e) => setConfig({
//                       ...config,
//                       data: { ...config.data, type: e.target.value }
//                     })}
//                     className="mr-2"
//                   />
//                   <span>Unlabeled</span>
//                 </label>
//               </div>
//             </div>

//             {config.data.type === "labeled" && (
//               <div className="space-y-2">
//                 <label className="block text-gray-300">Target Type</label>
//                 <select 
//                   value={config.target.type}
//                   onChange={(e) => setConfig({
//                     ...config,
//                     target: { 
//                       type: e.target.value,
//                       features: e.target.value === "prediction" ? [] : []
//                     }
//                   })}
//                   className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 >
//                   <option value="prediction">Prediction</option>
//                   <option value="classification">Classification</option>
//                 </select>
//               </div>
//             )}

//             <select 
//               value={config.data.distribution}
//               onChange={(e) => setConfig({
//                 ...config,
//                 data: { ...config.data, distribution: e.target.value }
//               })}
//               className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//             >
//               <option value="Gaussian">Gaussian</option>
//               <option value="Uniform">Uniform</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Linearity Ratio (e.g., 70:30)"
//               value={config.data.linearity_ratio}
//               onChange={(e) => setConfig({
//                 ...config,
//                 data: { ...config.data, linearity_ratio: e.target.value }
//               })}
//               className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//             />

//             <input
//               type="number"
//               placeholder="Number of Samples"
//               value={config.data.num_samples}
//               onChange={(e) => setConfig({
//                 ...config,
//                 data: { ...config.data, num_samples: parseInt(e.target.value) }
//               })}
//               className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//             />

//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold text-gray-200">Features</h2>
//               {config.data.features.map((feature, index) => (
//                 <FeatureInput
//                   key={index}
//                   feature={feature}
//                   index={index}
//                   updateFeature={updateFeature}
//                   removeFeature={removeFeature}
//                 />
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addFeature(false)}
//                 className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
//               >
//                 Add Feature
//               </button>
//             </div>

//             {config.data.type === "labeled" && config.target.type === "prediction" && (
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-gray-200">Target Features</h2>
//                 {config.target.features.map((feature, index) => (
//                   <FeatureInput
//                     key={index}
//                     feature={feature}
//                     index={index}
//                     updateFeature={(index, field, value) => updateFeature(index, field, value, true)}
//                     removeFeature={(index) => removeFeature(index, true)}
//                   />
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addFeature(true)}
//                   className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
//                 >
//                   Add Target Feature
//                 </button>
//               </div>
//             )}

//             {config.data.type === "labeled" && config.target.type === "classification" && (
//               <div className="space-y-2">
//                 <label className="block text-gray-300">Enter Classes (comma-separated)</label>
//                 <input
//                   type="text"
//                   placeholder="e.g., class1,class2,class3"
//                   value={classes}
//                   onChange={(e) => setClasses(e.target.value)}
//                   className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//             )}

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
//             >
//               Generate Dataset
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// page.js
// page.js
// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import axios from "axios";

// const DreamBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute left-16 top-12">
//       <motion.span 
//         className="text-8xl font-extralight tracking-wider text-white opacity-90"
//         style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.1em' }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         Dream
//       </motion.span>
//     </div>
//   </div>
// );

// export default function Home() {
//   const [formData, setFormData] = useState({
//     model_description: "", // Added for MongoDB schema compatibility
//     data: {
//       type: "labeled", // Default value since it's required
//       output_format: "json", // Default value
//       distribution: "Gaussian", // Default value
//       num_samples: "",
//       features: [], // Will be generated based on numFeatures
//     },
//     target: {
//       type: "prediction", // Default value
//       features: [],
//     },
//     // UI form fields
//     typeOfData: "",
//     numSamples: "",
//     numFeatures: "",
//     datasetType: "",
//     range: "",
//     mean: "",
//     stdDev: "",
//     distributionType: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     // Special handling for numbers
//     if (e.target.name === "numSamples" || e.target.name === "numFeatures") {
//       const value = e.target.value === "" ? "" : parseInt(e.target.value);
//       setFormData({ ...formData, [e.target.name]: value });
      
//       // Also update the data.num_samples property for MongoDB compatibility
//       if (e.target.name === "numSamples") {
//         setFormData(prev => ({
//           ...prev,
//           data: { ...prev.data, num_samples: value }
//         }));
//       }
//     } else if (e.target.name === "distributionType") {
//       setFormData({ 
//         ...formData, 
//         [e.target.name]: e.target.value,
//         data: { ...formData.data, distribution: e.target.value }
//       });
//     } else if (e.target.name === "datasetType") {
//       setFormData({ 
//         ...formData, 
//         [e.target.name]: e.target.value,
//         data: { ...formData.data, output_format: e.target.value.toLowerCase() }
//       });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const generateFeatures = () => {
//     if (!formData.numFeatures || isNaN(parseInt(formData.numFeatures))) {
//       return [];
//     }
    
//     const features = [];
//     for (let i = 1; i <= parseInt(formData.numFeatures); i++) {
//       const datatype = formData.typeOfData === "Float" ? "float" : 
//                        formData.typeOfData === "Integer" ? "integer" : "string";
      
//       features.push({
//         name: `feature_${i}`,
//         datatype,
//         range_or_mean: formData.range || formData.mean || "",
//         std_dev: formData.stdDev || "",
//       });
//     }
//     return features;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       // Validate required fields
//       if (!formData.numSamples || isNaN(parseInt(formData.numSamples))) {
//         throw new Error("Number of samples is required and must be a valid number");
//       }
      
//       if (!formData.numFeatures || isNaN(parseInt(formData.numFeatures))) {
//         throw new Error("Number of features is required and must be a valid number");
//       }
      
//       if (!formData.typeOfData) {
//         throw new Error("Type of data is required");
//       }
      
//       if (!formData.distributionType) {
//         throw new Error("Distribution type is required");
//       }
      
//       // Build MongoDB-compatible config structure
//       const finalConfig = {
//         model_description: formData.model_description || `${formData.typeOfData} dataset with ${formData.numFeatures} features`,
//         data: {
//           type: formData.data.type,
//           output_format: formData.datasetType ? formData.datasetType.toLowerCase() : "json",
//           distribution: formData.distributionType || "Gaussian",
//           linearity_ratio: "",
//           num_samples: parseInt(formData.numSamples),
//           features: generateFeatures(),
//         },
//         target: {
//           type: "prediction",
//           features: [],
//         },
//       };

//       console.log("Submitting config:", finalConfig);
      
//       const response = await axios.post("/api/submit-config", finalConfig);
//       setSuccess(true);
//       console.log("Data saved successfully:", response.data);
//     } catch (err) {
//       const errorMessage = err.response?.data?.error || err.message || "Failed to save data";
//       setError(errorMessage);
//       console.error("Error submitting form:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <DreamBackground />
//       <div className="w-full flex justify-end pt-4 pr-24">
//         <motion.div
//           className="relative w-full max-w-3xl p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg mx-6"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
//         >
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
//             Synthetic Data Generator
//           </h1>

//           {error && (
//             <div className="text-red-400 p-3 mb-4 bg-red-900/30 rounded">
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="text-green-400 p-3 mb-4 bg-green-900/30 rounded">
//               Configuration saved successfully!
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Type of Data (Float/List)</label>
//               <input
//                 type="text"
//                 name="typeOfData"
//                 value={formData.typeOfData}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Float, Integer, String"
//                 required
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Number of Samples</label>
//               <input
//                 type="number"
//                 name="numSamples"
//                 value={formData.numSamples}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter number of samples"
//                 required
//                 min="1"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Number of Features</label>
//               <input
//                 type="number"
//                 name="numFeatures"
//                 value={formData.numFeatures}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter number of features"
//                 required
//                 min="1"
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Dataset Type (File Format)</label>
//               <input
//                 type="text"
//                 name="datasetType"
//                 value={formData.datasetType}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., JSON, CSV"
//                 required
//               />
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Expected Additional Values</label>
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   name="range"
//                   value={formData.range}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Range"
//                 />
//                 <input
//                   type="text"
//                   name="mean"
//                   value={formData.mean}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Mean"
//                 />
//                 <input
//                   type="text"
//                   name="stdDev"
//                   value={formData.stdDev}
//                   onChange={handleChange}
//                   className="w-1/3 p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Std Dev"
//                 />
//               </div>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <label className="block text-gray-300">Type of Distribution</label>
//               <input
//                 type="text"
//                 name="distributionType"
//                 value={formData.distributionType}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Gaussian, Uniform, Exponential"
//                 required
//               />
//             </motion.div>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-green-600 transition duration-300"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const DreamBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-16 top-12">
      <motion.span 
        className="text-8xl font-extralight tracking-wider text-white opacity-90"
        style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.1em' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Dream
      </motion.span>
    </div>
  </div>
);

// const FeatureInput = ({ feature, index, updateFeature, removeFeature }) => (
//   <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg mb-4">
//     <input
//       type="text"
//       placeholder="Feature name"
//       value={feature.name}
//       onChange={(e) => updateFeature(index, "name", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <select 
//       value={feature.datatype} 
//       onChange={(e) => updateFeature(index, "datatype", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     >
//       <option value="">Select data type</option>
//       <option value="float">Float</option>
//       <option value="integer">Integer</option>
//       <option value="string">String</option>
//     </select>
//     <input
//       type="text"
//       placeholder="Range or mean"
//       value={feature.range_or_mean}
//       onChange={(e) => updateFeature(index, "range_or_mean", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <input
//       type="text"
//       placeholder="Standard deviation"
//       value={feature.std_dev}
//       onChange={(e) => updateFeature(index, "std_dev", e.target.value)}
//       className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//     />
//     <button
//       onClick={() => removeFeature(index)}
//       className="text-red-400 hover:text-red-300"
//     >
//       Remove Feature
//     </button>
//   </div>
// );
const FeatureInput = ({ feature, index, updateFeature, removeFeature }) => (
  <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg mb-4">
    <input
      type="text"
      placeholder="Feature name"
      value={feature.name}
      onChange={(e) => updateFeature(index, "name", e.target.value)}
      className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
    />
    <select 
      value={feature.datatype} 
      onChange={(e) => updateFeature(index, "datatype", e.target.value)}
      className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
    >
      <option value="">Select data type</option>
      <option value="float">Float</option>
      <option value="integer">Integer</option>
      <option value="string">String</option>
    </select>
    <input
      type="text"
      placeholder={feature.datatype === "integer" ? "Range (e.g., 1-100)" : "Mean"}
      value={feature.range_or_mean}
      onChange={(e) => updateFeature(index, "range_or_mean", e.target.value)}
      className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
    />
    {feature.datatype === "float" && (
      <input
        type="text"
        placeholder="Standard deviation"
        value={feature.std_dev}
        onChange={(e) => updateFeature(index, "std_dev", e.target.value)}
        className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
      />
    )}
    <button
      onClick={() => removeFeature(index)}
      className="text-red-400 hover:text-red-300"
    >
      Remove Feature
    </button>
  </div>
);

export default function Home() {
  const [formData, setFormData] = useState({
    model_description: "",
    data: {
      type: "labeled", // Default value since it's required
      output_format: "json", // Default value
      distribution: "Gaussian", // Default value
      linearity_ratio: "",
      num_samples: "",
      features: [], // Will be generated based on advanced UI
    },
    target: {
      type: "prediction", // Default value
      features: [],
    },
    // UI form fields
    typeOfData: "",
    numSamples: "",
    datasetType: "",
    distributionType: "",
    csvFile: null,
    classes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for numbers
    if (name === "numSamples") {
      const parsedValue = value === "" ? "" : parseInt(value);
      setFormData({
        ...formData,
        [name]: parsedValue,
        data: { ...formData.data, num_samples: parsedValue }
      });
    } else if (name === "distributionType") {
      setFormData({ 
        ...formData, 
        [name]: value,
        data: { ...formData.data, distribution: value }
      });
    } else if (name === "datasetType") {
      setFormData({ 
        ...formData, 
        [name]: value,
        data: { ...formData.data, output_format: value.toLowerCase() }
      });
    } else if (name === "typeOfData") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === "classes") {
      setFormData({
        ...formData,
        classes: value,
      });
    } else if (name === "model_description") {
      setFormData({
        ...formData,
        model_description: value,
      });
    } else if (name === "linearity_ratio") {
      setFormData({
        ...formData,
        data: { ...formData.data, linearity_ratio: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData({
  //       ...formData,
  //       csvFile: file
  //     });
  //   }
  // };
// Update the file upload and feature handling in your page.js
const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData({
      ...formData,
      csvFile: file
    });

    try {
      // Create form data for file upload
      const formData = new FormData();
      formData.append('file', file);

      // Process CSV file
      const response = await axios.post('/api/process-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update features with processed data
      if (response.data.features) {
        setFormData(prevState => ({
          ...prevState,
          data: {
            ...prevState.data,
            features: response.data.features
          }
        }));

        // Show success message
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error processing CSV:', error);
      setError(error.response?.data?.error || 'Error processing CSV file');
    }
  }
};

// Update the FeatureInput component to display the processed values


  const updateFeature = (index, field, value, isTarget = false) => {
    if (isTarget) {
      const newFeatures = [...formData.target.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      setFormData({
        ...formData,
        target: { ...formData.target, features: newFeatures }
      });
    } else {
      const newFeatures = [...formData.data.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      setFormData({
        ...formData,
        data: { ...formData.data, features: newFeatures }
      });
    }
  };

  const removeFeature = (index, isTarget = false) => {
    if (isTarget) {
      const newFeatures = formData.target.features.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        target: { ...formData.target, features: newFeatures }
      });
    } else {
      const newFeatures = formData.data.features.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        data: { ...formData.data, features: newFeatures }
      });
    }
  };

  const addFeature = (isTarget = false) => {
    const newFeature = {
      name: "",
      datatype: formData.typeOfData ? formData.typeOfData.toLowerCase() : "",
      range_or_mean: "",
      std_dev: ""
    };

    if (isTarget) {
      setFormData({
        ...formData,
        target: {
          ...formData.target,
          features: [...formData.target.features, newFeature]
        }
      });
    } else {
      setFormData({
        ...formData,
        data: {
          ...formData.data,
          features: [...formData.data.features, newFeature]
        }
      });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess(false);

  //   try {
  //     // Validate required fields
  //     if (!formData.numSamples || isNaN(parseInt(formData.numSamples))) {
  //       throw new Error("Number of samples is required and must be a valid number");
  //     }
      
  //     if (!formData.data.features || formData.data.features.length === 0) {
  //       throw new Error("At least one feature is required");
  //     }
      
  //     if (!formData.typeOfData) {
  //       throw new Error("Type of data is required");
  //     }
      
  //     if (!formData.distributionType) {
  //       throw new Error("Distribution type is required");
  //     }
      
  //     // Build MongoDB-compatible config structure
  //     const finalConfig = {
  //       model_description: formData.model_description || `${formData.typeOfData} dataset with ${formData.data.features.length} features`,
  //       data: {
  //         type: formData.data.type,
  //         output_format: formData.datasetType ? formData.datasetType.toLowerCase() : "json",
  //         distribution: formData.distributionType || "Gaussian",
  //         linearity_ratio: formData.data.linearity_ratio || "",
  //         num_samples: parseInt(formData.numSamples),
  //         features: formData.data.features,
  //       },
  //       target: {
  //         type: formData.target.type,
  //         features: formData.target.features,
  //       },
  //     };

  //     // Add classes if classification is selected
  //     if (formData.target.type === "classification" && formData.classes) {
  //       finalConfig.target.classes = formData.classes.split(",").map(c => c.trim());
  //     }

  //     // Add CSV data if a file was uploaded
  //     if (formData.csvFile) {
  //       const csvContent = await formData.csvFile.text();
  //       finalConfig.csvData = csvContent;
  //     }

  //     console.log("Submitting config:", finalConfig);
      
  //     const response = await axios.post("/api/submit-config", finalConfig);
  //     const response1 = await axios.post("https://2378-34-23-103-109.ngrok-free.app/", finalConfig);
  //     setSuccess(true);
  //     console.log("Data saved successfully:", response.data);
  //     console.log("Data saved successfully:", response1.data);
  //   } catch (err) {
  //     const errorMessage = err.response?.data?.error || err.message || "Failed to save data";
  //     setError(errorMessage);
  //     console.error("Error submitting form:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
  
    try {
      // Validate required fields
      if (!formData.numSamples || isNaN(parseInt(formData.numSamples))) {
        throw new Error("Number of samples is required and must be a valid number");
      }
      
      if (!formData.data.features || formData.data.features.length === 0) {
        throw new Error("At least one feature is required");
      }
      
      if (!formData.typeOfData) {
        throw new Error("Type of data is required");
      }
      
      if (!formData.distributionType) {
        throw new Error("Distribution type is required");
      }
      
      // Build MongoDB-compatible config structure
      const finalConfig = {
        model_description: formData.model_description || `${formData.typeOfData} dataset with ${formData.data.features.length} features`,
        data: {
          type: formData.data.type,
          output_format: formData.datasetType ? formData.datasetType.toLowerCase() : "json",
          distribution: formData.distributionType || "Gaussian",
          linearity_ratio: formData.data.linearity_ratio || "",
          num_samples: parseInt(formData.numSamples),
          features: formData.data.features,
        },
        target: {
          type: formData.target.type,
          features: formData.target.features,
        },
      };
  
      // Add classes if classification is selected
      if (formData.target.type === "classification" && formData.classes) {
        finalConfig.target.classes = formData.classes.split(",").map(c => c.trim());
      }
  
      // Add CSV data if a file was uploaded
      if (formData.csvFile) {
        const csvContent = await formData.csvFile.text();
        finalConfig.csvData = csvContent;
      }
  
      console.log("Submitting config:", finalConfig);
  
      // Send JSON data to internal API
      const response = await axios.post("/api/submit-config", finalConfig);
      console.log("Data saved successfully:✅", response.data.syntheticFile);
      let finalCSVData = response.data.syntheticFile;

      // Create a Blob (file) from the CSV data
      const blob = new Blob([finalCSVData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
  
      // Create a temporary link element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "synthetic_data.csv"; // File name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);


  


      setSuccess(true);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || "Failed to save data";
      setError(errorMessage);
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = () => {
    // Convert the array to CSV string

};
  

  return (
    <div className="relative min-h-screen bg-black text-white">
      <DreamBackground />
      <div className="w-full flex justify-end pt-4 pr-24">
        <motion.div
          className="relative w-full max-w-3xl p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg mx-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
            Synthetic Data Generator
          </h1>

          {error && (
            <div className="text-red-400 p-3 mb-4 bg-red-900/30 rounded">
              {error}
            </div>
          )}
          
          {success && (
            <div className="text-green-400 p-3 mb-4 bg-green-900/30 rounded">
              Configuration saved successfully!
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Model Description</label>
              <input
                type="text"
                name="model_description"
                value={formData.model_description}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter model description"
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Upload CSV File (Optional)</label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Dataset Type</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="data.type"
                    value="labeled"
                    checked={formData.data.type === "labeled"}
                    onChange={(e) => setFormData({
                      ...formData,
                      data: { ...formData.data, type: e.target.value }
                    })}
                    className="mr-2"
                  />
                  <span>Labeled</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="data.type"
                    value="unlabeled"
                    checked={formData.data.type === "unlabeled"}
                    onChange={(e) => setFormData({
                      ...formData,
                      data: { ...formData.data, type: e.target.value }
                    })}
                    className="mr-2"
                  />
                  <span>Unlabeled</span>
                </label>
              </div>
            </motion.div>

            {formData.data.type === "labeled" && (
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <label className="block text-gray-300">Target Type</label>
                <select 
                  value={formData.target.type}
                  onChange={(e) => setFormData({
                    ...formData,
                    target: { 
                      type: e.target.value,
                      features: e.target.value === "prediction" ? formData.target.features : []
                    }
                  })}
                  className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="prediction">Prediction</option>
                  <option value="classification">Classification</option>
                </select>
              </motion.div>
            )}

            {formData.target.type === "classification" && (
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <label className="block text-gray-300">Enter Classes (comma-separated)</label>
                <input
                  type="text"
                  name="classes"
                  placeholder="e.g., class1,class2,class3"
                  value={formData.classes}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Type of Data</label>
              <input
                type="text"
                name="typeOfData"
                value={formData.typeOfData}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Float, Integer, String"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Number of Samples</label>
              <input
                type="number"
                name="numSamples"
                value={formData.numSamples}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of samples"
                required
                min="1"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Dataset Type (File Format)</label>
              <input
                type="text"
                name="datasetType"
                value={formData.datasetType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., JSON, CSV"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Type of Distribution</label>
              <input
                type="text"
                name="distributionType"
                value={formData.distributionType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Gaussian, Uniform, Exponential"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-300">Linearity Ratio (Optional)</label>
              <input
                type="text"
                name="linearity_ratio"
                value={formData.data.linearity_ratio}
                onChange={(e) => setFormData({
                  ...formData,
                  data: { ...formData.data, linearity_ratio: e.target.value }
                })}
                className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 70:30"
              />
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-200">Features</h2>
              {formData.data.features.map((feature, index) => (
                <FeatureInput
                  key={index}
                  feature={feature}
                  index={index}
                  updateFeature={updateFeature}
                  removeFeature={removeFeature}
                />
              ))}
              <button
                type="button"
                onClick={() => addFeature(false)}
                className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
              >
                Add Feature
              </button>
            </div>

            {formData.data.type === "labeled"  && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-200">Target Features</h2>
                {formData.target.features.map((feature, index) => (
                  <FeatureInput
                    key={index}
                    feature={feature}
                    index={index}
                    updateFeature={(index, field, value) => updateFeature(index, field, value, true)}
                    removeFeature={(index) => removeFeature(index, true)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addFeature(true)}
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
                >
                  Add Target Feature
                </button>
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-green-600 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}

            </motion.button>
            {/* <motion.button onClick={handleDownload}>
                Download CSV
              </motion.button> */}
          </form>
        </motion.div>
      </div>
    </div>
  );
}