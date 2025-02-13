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
"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";

const FeatureInput = ({ feature, index, updateFeature, removeFeature }) => (
  <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg">
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
      placeholder="Range or mean"
      value={feature.range_or_mean}
      onChange={(e) => updateFeature(index, "range_or_mean", e.target.value)}
      className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
    />
    <input
      type="text"
      placeholder="Standard deviation"
      value={feature.std_dev}
      onChange={(e) => updateFeature(index, "std_dev", e.target.value)}
      className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
    />
    <button
      onClick={() => removeFeature(index)}
      className="text-red-400 hover:text-red-300"
    >
      Remove Feature
    </button>
  </div>
);

export default function SyntheticDataGenerator() {
  const [config, setConfig] = useState({
    model_description: "",
    data: {
      type: "labeled",
      output_format: "json",
      distribution: "Gaussian",
      linearity_ratio: "",
      num_samples: "",
      features: []
    },
    target: {
      type: "prediction",
      features: []
    }
  });

  const [classes, setClasses] = useState("");

  const updateFeature = (index, field, value, isTarget = false) => {
    if (isTarget) {
      const newFeatures = [...config.target.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      setConfig({
        ...config,
        target: { ...config.target, features: newFeatures }
      });
    } else {
      const newFeatures = [...config.data.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      setConfig({
        ...config,
        data: { ...config.data, features: newFeatures }
      });
    }
  };

  const removeFeature = (index, isTarget = false) => {
    if (isTarget) {
      const newFeatures = config.target.features.filter((_, i) => i !== index);
      setConfig({
        ...config,
        target: { ...config.target, features: newFeatures }
      });
    } else {
      const newFeatures = config.data.features.filter((_, i) => i !== index);
      setConfig({
        ...config,
        data: { ...config.data, features: newFeatures }
      });
    }
  };

  const addFeature = (isTarget = false) => {
    const newFeature = {
      name: "",
      datatype: "",
      range_or_mean: "",
      std_dev: ""
    };

    if (isTarget) {
      setConfig({
        ...config,
        target: {
          ...config.target,
          features: [...config.target.features, newFeature]
        }
      });
    } else {
      setConfig({
        ...config,
        data: {
          ...config.data,
          features: [...config.data.features, newFeature]
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalConfig = {...config};
    if (config.target.type === "classification") {
      finalConfig.target.classes = classes.split(",").map(c => c.trim());
      delete finalConfig.target.features;
    }
    console.log(JSON.stringify(finalConfig, null, 2));
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="w-full max-w-4xl mx-auto p-8">
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
            Synthetic Data Generator
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Enter model description"
              value={config.model_description}
              onChange={(e) => setConfig({ ...config, model_description: e.target.value })}
              className="w-full p-2 rounded bg-gray-800/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <div className="space-y-2">
              <label className="block text-gray-300">Dataset Type</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="labeled"
                    checked={config.data.type === "labeled"}
                    onChange={(e) => setConfig({
                      ...config,
                      data: { ...config.data, type: e.target.value }
                    })}
                    className="mr-2"
                  />
                  <span>Labeled</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="unlabeled"
                    checked={config.data.type === "unlabeled"}
                    onChange={(e) => setConfig({
                      ...config,
                      data: { ...config.data, type: e.target.value }
                    })}
                    className="mr-2"
                  />
                  <span>Unlabeled</span>
                </label>
              </div>
            </div>

            {config.data.type === "labeled" && (
              <div className="space-y-2">
                <label className="block text-gray-300">Target Type</label>
                <select 
                  value={config.target.type}
                  onChange={(e) => setConfig({
                    ...config,
                    target: { 
                      type: e.target.value,
                      features: e.target.value === "prediction" ? [] : []
                    }
                  })}
                  className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                >
                  <option value="prediction">Prediction</option>
                  <option value="classification">Classification</option>
                </select>
              </div>
            )}

            <select 
              value={config.data.distribution}
              onChange={(e) => setConfig({
                ...config,
                data: { ...config.data, distribution: e.target.value }
              })}
              className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            >
              <option value="Gaussian">Gaussian</option>
              <option value="Uniform">Uniform</option>
            </select>

            <input
              type="text"
              placeholder="Linearity Ratio (e.g., 70:30)"
              value={config.data.linearity_ratio}
              onChange={(e) => setConfig({
                ...config,
                data: { ...config.data, linearity_ratio: e.target.value }
              })}
              className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <input
              type="number"
              placeholder="Number of Samples"
              value={config.data.num_samples}
              onChange={(e) => setConfig({
                ...config,
                data: { ...config.data, num_samples: parseInt(e.target.value) }
              })}
              className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-200">Features</h2>
              {config.data.features.map((feature, index) => (
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

            {config.data.type === "labeled" && config.target.type === "prediction" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-200">Target Features</h2>
                {config.target.features.map((feature, index) => (
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

            {config.data.type === "labeled" && config.target.type === "classification" && (
              <div className="space-y-2">
                <label className="block text-gray-300">Enter Classes (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g., class1,class2,class3"
                  value={classes}
                  onChange={(e) => setClasses(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
            >
              Generate Dataset
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}