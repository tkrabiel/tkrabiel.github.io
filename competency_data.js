const masterData = {
    "S5A": [
        {
            "type": "H",
            "desc": "B1: Mathematics, Statistics, Theory of Observations"
        },
        {
            "type": "I",
            "id": "B1.1a",
            "desc": "Geometry",
            "info": "**Content:**\n(i) Conic Sections, geometry of the ellipse and of the ellipsoid. (ii) Parametric equations of curves and surfaces.\n\n**Learning Outcomes:**\nExpress curves and surfaces in parametric form.  Compute lengths and coordinates on an ellipse."
        },
        {
            "type": "I",
            "id": "B1.1b",
            "desc": "Linear algebra",
            "info": "**Content:**\n(i) Vector and affine spaces, vector and inner products, norms. (ii) Linear operators, matrix representation, composition, transpose. (iii) Translations, rotations, coordinate transformations, similitudes, orthogonal projection.\n\n**Learning Outcomes:**\nDerive and compute 2D and 3D transformations, as typically involved in geodesy, surveying and survey data georeferencing."
        },
        {
            "type": "I",
            "id": "B1.1c",
            "desc": "Numerical methods for linear systems of equations",
            "info": "**Content:**\n(i) Systems of linear equations, Gauss elimination. (ii) Matrix decomposition, and factorization. (iii) Condition number of a matrix.\n\n**Learning Outcomes:**\nSolve linear equations by numerical methods in a scientific computing environment and analyze error bounds."
        },
        {
            "type": "I",
            "id": "B1.2a",
            "desc": "Differential and integral calculus",
            "info": "**Content:**\n(i) Real and vector valued functions. (ii) Series, Taylor expansions  (iii) Gradient of a real-valued functions.  (iv) Jacobian matrix (v) Integrals of real-valued functions. (vi) Numerical integration methods.\n\n**Learning Outcomes:**\nApply differential calculus to real and vector valued functions from a ndimensional vector space.  Calculate integral of classical functions and approximate numerical values."
        },
        {
            "type": "I",
            "id": "B1.2b",
            "desc": "Numerical solutions of non-linear equation",
            "info": "**Content:**\n(i) Iterative methods.  (ii) Rounding and numerical errors.\n\n**Learning Outcomes:**\nApply numerical methods to find approximate solutions for non-linear equations."
        },
        {
            "type": "I",
            "id": "B1.3a",
            "desc": "Probabilities and Bayesian estimation",
            "info": "**Content:**\n(i) Probability measures, density functions (ii) Mathematical expectation, variance (iii) Covariance, correlation (iv) Conditional probabilities, Bayes law (v) Minimum mean square estimation (vi) Distributions including normal, chi-squared, t and F\n\n**Learning Outcomes:**\nDefine probability measures, derive associated formulae and calculate values from data. (B)  Select a distribution for a given random variable and apply a Bayesian estimation method. (I)"
        },
        {
            "type": "I",
            "id": "B1.3b",
            "desc": "Statistics",
            "info": "**Content:**\n(i) Random variables, mean, variance, standard deviation (ii) Estimation of mean, variance, covariance (iii) Statistical testing, confidence intervals\n\n**Learning Outcomes:**\nCompute confidence intervals and associated statistical measures for random variables using various distributions."
        },
        {
            "type": "H",
            "desc": "B2: Information and Communication Technology"
        },
        {
            "type": "I",
            "id": "B2.1",
            "desc": "Computer systems",
            "info": "**Content:**\n(i) Central Processing Unit (ii) RAM, data storage devices and standards (iii) Communication board, serial links, communication ports and standards, buffers, Ethernet links, data transmission rates (iv) Communication protocols (v) Clocks, clocks drift, time tagging and synchronization of data (vi) Operating systems  (vii) Device drivers\n\n**Learning Outcomes:**\nDescribe the different components of a real-time data acquisition system, including various modes of communication and time-tagging.   Describe the role of a device driver and its relation to data exchange.  Create/Configure a data link and evaluate any time delays across the link."
        },
        {
            "type": "I",
            "id": "B2.2",
            "desc": "Office work software suites",
            "info": "**Content:**\n(i) Word processors (ii) Spreadsheets  (iii) Graphics software\n\n**Learning Outcomes:**\nUse classical office work software suites. Prepare a poster describing scientific or project results."
        },
        {
            "type": "I",
            "id": "B2.3",
            "desc": "Programming",
            "info": "**Content:**\n(i) Basic operations of a computer program or script (ii) Algorithms (loops, conditional instructions) (iii) Scientific computation environments (iv) Application to data exchange, file conversion\n\n**Learning Outcomes:**\nWrite a program or script for data format conversion and/or basic algorithm computation.   Configure a small network and transfer data over that network"
        },
        {
            "type": "I",
            "id": "B2.4",
            "desc": "Web and network services",
            "info": "**Content:**\n(i) Networks (LANs) (ii) Network and cloud storage (iii) Internet  (iv) Networks integrity (v) Communication protocols\n\n**Learning Outcomes:**\nDescribe the different network options used in remote data exchange and storage applications."
        },
        {
            "type": "I",
            "id": "B2.5",
            "desc": "Databases",
            "info": "**Content:**\n(i) File types (binary, text, XML) (ii) Relational databases (iii) Geospatial databases  (iv) Database management systems and query languages\n\n**Learning Outcomes:**\nDescribe different types of geospatial data and their representation.  Construct a database, populate it and query its content using a database language, such as SQL."
        },
        {
            "type": "H",
            "desc": "B3: Physics"
        },
        {
            "type": "I",
            "id": "B3.1",
            "desc": "Kinematics",
            "info": "**Content:**\n(i) Angular and linear velocities, accelerations (ii) Angular velocities addition rules, accelerations due to rotational motion, Coriolis Law\n\n**Learning Outcomes:**\nExplain the principle and the relationship between position, velocity and acceleration for both rotational and linear motion."
        },
        {
            "type": "I",
            "id": "B3.2",
            "desc": "Gravity",
            "info": "**Content:**\n(i) The inertial frame (ii) Newton\u2019s law, forces, accelerations, energy (iii) Center of gravity, center of instantaneous rotation (iv) Gravitational field (v) Potential fields\n\n**Learning Outcomes:**\nDifferentiate between inertial and Earth fixed frames.  Differentiate center of gravity from center of instantaneous rotation.  Develop the mathematical relationship between potential and acceleration in a gravitational field."
        },
        {
            "type": "I",
            "id": "B3.3",
            "desc": "Magnetism",
            "info": "**Content:**\n(i) Magnetic characteristic of ferrous bodies (ii) Magnetic field\n\n**Learning Outcomes:**\nDescribe ferromagnetic properties and resulting magnetic field."
        },
        {
            "type": "I",
            "id": "B3.4",
            "desc": "Waves",
            "info": "**Content:**\n(i) Harmonic waves modeling and wave parameters  (amplitude, frequency, wavelength, celerity and phase) (ii) Longitudinal and transverse waves  (iii) Intensity, Decibel scale  (iv) Attenuation (v) Doppler effect (vi) Interferometric principles\n\n**Learning Outcomes:**\nExplain harmonics in the context of waves and resulting constructive and destructive interferences patterns from multiple waves and sources.  Use the Decibel scale to define intensity and characterize attenuation.  Explain the Doppler effect"
        },
        {
            "type": "I",
            "id": "B3.5",
            "desc": "Electromagnetic waves",
            "info": "**Content:**\n(i) Electromagnetic waves properties and propagation (ii) Radiation, emission and absorption (iii) Reflection, refraction, diffraction (iv) Optical reflectance\n\n**Learning Outcomes:**\nCalculate field of view and resolving power of optics.    Describe aberrations.  Describe the effect of wavelength on the propagation in a medium.  Describe the effect of a medium in the propagation of an electromagnetic wave"
        },
        {
            "type": "I",
            "id": "B3.6",
            "desc": "Geometrical optics",
            "info": "**Content:**\n(i) Mirror, prisms, lenses and filters (ii) Telescopic optics and magnification (iii) Snell-Descartes law\n\n**Learning Outcomes:**\nModel a light ray-path through medium with various reflective and refractive properties.  Use the characteristics of a lens to calculate geometrical properties of an image."
        },
        {
            "type": "I",
            "id": "B3.7",
            "desc": "Lasers",
            "info": "**Content:**\n(i) Principle of  lasers (ii) Laser parameters (frequency, wavelength) (iii) Types of lasers (iv) Laser attenuation\n\n**Learning Outcomes:**\nDescribe the operation, unique properties, and applications of stimulated sources of emission."
        },
        {
            "type": "I",
            "id": "B3.8",
            "desc": "Transducers and clocks",
            "info": "**Content:**\n(i) Pressure transducers (ii) Thermal transducers (iii) Types of clocks (iv) Measurement of elapsed time\n\n**Learning Outcomes:**\nDescribe different types of transducers and their calibration requirements.  Describe time measurement devices in relation to their drift coefficient and accuracy."
        },
        {
            "type": "H",
            "desc": "B4: Nautical Science"
        },
        {
            "type": "I",
            "id": "B4.1",
            "desc": "Conventional aids to navigation",
            "info": "**Content:**\n(i) Types of buoys and beacons (ii) Radar beacons (iii) AIS systems\n\n**Learning Outcomes:**\nDescribe the characteristics and purposes of fixed and floating aids to navigation and the use of automatic identification systems."
        },
        {
            "type": "I",
            "id": "B4.2",
            "desc": "GMDSS",
            "info": "**Content:**\n(i) Sea areas (ii) EPIRBs and SARSAT (iii) Digital selective calling (iv) NAVTEX (v) SafetyNET (vi) Promulgation of Maritime Safety Information (MSI) (vii) World Wide Navigational Warning Service (WWNWS)\n\n**Learning Outcomes:**\nDescribe the components and purpose of GMDSS."
        },
        {
            "type": "I",
            "id": "B4.3",
            "desc": "Nautical charts",
            "info": "**Content:**\n(i) Content, datum, projection, scale and types of nautical charts (ii) Chart symbols (iii) Chart graticules (iv) Uncertainty indicators (e.g. source diagram, reliability diagram, zone of confidence, notes) (v) Navigational hazards (vi) Plotting instruments (vii) ECDIS, ENC, RNC and ECS\n\n**Learning Outcomes:**\nPlan and layout a route on a nautical chart, enter/plot positions, identify navigational hazards and revise navigational plan as required.   Describe the content of a nautical chart and explain datum, projection and scale.  Describe the uncertainty indicators associated with nautical charts."
        },
        {
            "type": "I",
            "id": "B4.4",
            "desc": "Navigation publications",
            "info": "**Content:**\n(i) Sailing directions,  (ii) Light and radio lists,  (iii) Tides and current tables (iv) Notice to Mariners (NtoM) and Urgent Notice to Mariners\n\n**Learning Outcomes:**\nUse content of nautical publications in a survey planning context."
        },
        {
            "type": "I",
            "id": "B4.5",
            "desc": "Compasses",
            "info": "**Content:**\n(i) Magnetic compasses (ii) Gyros (iii) Compass error and corrections\n\n**Learning Outcomes:**\nDescribe the capabilities, limitations and sources of errors of magnetic and gyro compasses.   Determine and apply corrections for magnetic and gyro compass error."
        },
        {
            "type": "I",
            "id": "B4.6",
            "desc": "Emergency procedures",
            "info": "**Content:**\n(i) Fire extinguishers  (ii) Life preservers and cold water survival suits, life rafts (iii) Distress signals and EPIRB (iv) Procedures for man-overboard, fire, and abandoning ship\n\n**Learning Outcomes:**\nExplain the importance of the emergency equipment and procedures.  Identify types of fire extinguishers and their use."
        },
        {
            "type": "I",
            "id": "B4.7",
            "desc": "Safe working practice",
            "info": "**Content:**\n(i) Water-tight doors and hatches (ii) Suspended loads (iii) Enclosed spaces (iv) Working aloft, with equipment over the side, life lines. (v) Work permitting (vi) Securing equipment for sea (vii) Cables and antenna installation (viii) Earthing (grounding) of electrical equipment (ix) High voltage electrical safety (x) Personal protective equipment\n\n**Learning Outcomes:**\nDescribe procedures for maintaining a safe working environment.  Design safe cable routes for survey instruments.  Define procedures for securing equipment for heavy weather."
        },
        {
            "type": "I",
            "id": "B4.8",
            "desc": "Rope and wires",
            "info": "**Content:**\n(i) Types of wire and rope  (ii) Characteristics (stretch, floating, strength) of ropes and wires. (iii) Basic knots\n\n**Learning Outcomes:**\nSelect and tie basic knots.  Select appropriate wire or rope."
        },
        {
            "type": "I",
            "id": "B4.9",
            "desc": "Towed and over the side instruments",
            "info": "**Content:**\n(i) Rosette systems and instruments (ii) ROVs, AUVs, ASVs, towed systems, catenary and layback (iii) A-frames, cable blocks, electro-mechanical wire, wire strength factor for deep casts, slip rings and optical cabling (iv) Moon pools (v) Launch and recovery  (vi) Station keeping and maneuvering\n\n**Learning Outcomes:**\nSpecify procedures for deployment and recovery of oceanographic and hydrographic equipment."
        },
        {
            "type": "I",
            "id": "B4.10",
            "desc": "Anchoring",
            "info": "**Content:**\n(i) Shipboard ground tackle including anchor, chain, windlass, stoppers (ii) Small boat anchoring (iii) Multiple anchors\n\n**Learning Outcomes:**\nDescribe ship and small boats anchoring and ground tackle.   Explain how the final position of the vessel can be adjusted through the use of anchors."
        },
        {
            "type": "I",
            "id": "B4.11",
            "desc": "Instrument moorings",
            "info": "**Content:**\n(i) Launch and recovery (ii) Anchors and acoustic releases (iii) Scope, wire, flotation, tension (iv) Weights\n\n**Learning Outcomes:**\nSpecify types of mooring and procedures for mooring underwater instruments."
        },
        {
            "type": "H",
            "desc": "B5: Meteorology"
        },
        {
            "type": "I",
            "id": "B5.1",
            "desc": "Weather fundamentals and observations",
            "info": "**Content:**\n(i) Vertical structure and the variability  of the atmosphere (ii) Temperature, humidity, dewpoint, frost-point (iii) Atmospheric pressure, winds (iv) Clouds and precipitations (v) Rain, snow (vi) Visibility, advection fog and radiation fog (vii) Pressure systems (viii) Geostrophic winds, anabatic and katabatic winds (ix) Instruments and sensors used to register temperatures, pressure, direction and intensity of wind (x) Sea state scales, weather warning categories, wave height,  periods and direction\n\n**Learning Outcomes:**\nDefine physical meteorological parameters  Operate instruments and sensors used to register temperature, pressure, direction and intensity of wind.  Record these parameters according to internationally accepted standards.  Identify characteristics of weather by simple observation of the sea and the sky."
        },
        {
            "type": "I",
            "id": "B5.2",
            "desc": "Wind, waves and seas",
            "info": "**Learning Outcomes:**\nExplain the relation between atmospheric pressure, temperature and wind.  Describe wind circulation around pressure systems and the effect of friction"
        },
        {
            "type": "I",
            "id": "B5.3",
            "desc": "Weather forecasting",
            "info": "**Content:**\n(i) Synoptic charts (ii) Weather forecast\n\n**Learning Outcomes:**\nInterpret a synoptic chart. Produce an operational short range forecast based on meteorological information, weather bulletins and facsimile charts."
        },
        {
            "type": "H",
            "desc": "F1: Earth Models"
        },
        {
            "type": "I",
            "id": "F1.1a",
            "desc": "The gravity field of the Earth",
            "info": "**Content:**\n(i) Newton\u2019s law of gravitation (ii) Centrifugal acceleration (iii) Gravity (acceleration) (iv) Gravity potential  (v) Level or equipotential surfaces (vi) The Geoid (vii) Normal gravity and ellipsoidal models such as GRS80. (viii) Gravity anomalies (ix) Gravity observations\n\n**Learning Outcomes:**\nDescribe relationships between the gravity field of the Earth, normal gravity and level surfaces."
        },
        {
            "type": "I",
            "id": "F1.1b",
            "desc": "Gravity observations and their reduction",
            "info": "**Learning Outcomes:**\nExplain methods for observing gravity and computation of gravity anomalies"
        },
        {
            "type": "I",
            "id": "F1.1c",
            "desc": "Height systems and height determination",
            "info": "**Content:**\n(i) Dynamic heights (ii) Orthometric heights (iii) Normal heights (iv) Level ellipsoid (v) Theoretical misclosure of a leveling loop (vi) Geopotential models (vii) High resolution global and local geoid grids (viii) Deflection of the vertical\n\n**Learning Outcomes:**\nDescribe different height models and the role of gravity-based heights in modern levelling networks."
        },
        {
            "type": "I",
            "id": "F1.1d",
            "desc": "Geopotential and geoidal modelling",
            "info": "**Learning Outcomes:**\nDescribe techniques used to model the Earth\u2019s geopotential.  Discuss the application and limitations of geopotential models and their verification in height determination."
        },
        {
            "type": "I",
            "id": "F1.2a",
            "desc": "Coordinate systems for positioning",
            "info": "**Content:**\n(i) Traditional geodetic datums (ii) Terrestrial reference systems and reference frames. (iii) Modern geodetic datums based on terrestrial reference frames.  (iv) Datum transformation techniques including similarity transformations and grid based approaches.\n\n**Learning Outcomes:**\nExplain principles of astronomic and geocentric datums together with their practical realizations."
        },
        {
            "type": "I",
            "id": "F1.2b",
            "desc": "Datum transformation techniques",
            "info": "**Learning Outcomes:**\nCompare datum transformation methods and transform coordinates between datums and between reference frames.   Estimate transformation parameters from observations."
        },
        {
            "type": "I",
            "id": "F1.2c",
            "desc": "Geodetic computations on the ellipsoid",
            "info": "**Content:**\n(i) Grid computations and spherical trigonometry. (ii) Forward and inverse computations for geodesic and normal section curves on the ellipsoid.\n\n**Learning Outcomes:**\nAssess the various solutions available for forward and inverse computations on the ellipsoid.  Compare grid and spherical methods with ellipsoidal computations."
        },
        {
            "type": "I",
            "id": "F1.2d",
            "desc": "Three-dimensional geodetic modelling",
            "info": "**Content:**\n(i) Local and global Cartesian coordinate frames. Reference to physical plumb line and ellipsoidal normal. Geoid heights and deflections of the vertical.  (ii) 3D observation equations and 3D adjustment. Laplace equation\n\n**Learning Outcomes:**\nExplain the mathematical model of 3D geodesy, integrating satellite and terrestrial observations. Evaluate a typical hybrid network, using commercial software. Describe application of 3D Geodesy to hydrographic survey control and 3D positioning of survey vessels."
        },
        {
            "type": "I",
            "id": "F1.3a",
            "desc": "Trigonometric surveys",
            "info": "**Content:**\n(i) Principles of distance measurement and angle measurement (ii) Atmospheric and radiometric corrections for optical measurements. (iii) Calibration requirements and documentation  (iv) Sextant (in legacy context) (v) Theodolite (vi) Total Station (vii) Intersection, Resection, Polar and Traverse (viii) Astronomic methods for determination of orientation. (ix) Establishing ground control using GNSS, distance and angle measurements. (x) Control station recovery (xi) Logistical aspects of providing control\n\n**Learning Outcomes:**\nSelect appropriate methods and use corresponding instruments for local positioning."
        },
        {
            "type": "I",
            "id": "F1.3b",
            "desc": "Existing survey control",
            "info": "**Learning Outcomes:**\nRecover survey marks and associated documentation with an appreciation for the datum and accuracy associated with the historical survey."
        },
        {
            "type": "I",
            "id": "F1.3c",
            "desc": "Establishing survey control",
            "info": "**Learning Outcomes:**\nEstablish terrestrial control using GNSS in accordance with published quality control procedures"
        },
        {
            "type": "I",
            "id": "F1.3d",
            "desc": "Instrument tests",
            "info": "**Learning Outcomes:**\nField test and use distance and angle measurement instruments.  Select appropriate field validation procedures"
        },
        {
            "type": "I",
            "id": "F1.3e",
            "desc": "Historical surveys",
            "info": "**Learning Outcomes:**\nRelate historical surveys to legacy positioning systems"
        },
        {
            "type": "I",
            "id": "F1.4a",
            "desc": "Levelling instruments",
            "info": "**Content:**\n(i) Levelling instruments (ii) Total stations (iii) Effects of curvature and refraction (iv) Reduction of levels and correction to the relevant height datum (v) Calibration requirements and documentation\n\n**Learning Outcomes:**\nExplain the principles of operation of instruments used in determination of height differences."
        },
        {
            "type": "I",
            "id": "F1.4b",
            "desc": "Height reduction",
            "info": "**Learning Outcomes:**\nConduct surveys in accordance with standards.  Reduce elevation measurements and use adjustment procedures."
        },
        {
            "type": "I",
            "id": "F1.5a",
            "desc": "Map projections",
            "info": "**Content:**\n(i) Equidistant, equal area, azimuthal and conformal projections.  (ii) Properties and applications of cylindrical, conical and stereographic projections.  (iii) Grids, graticules and associated coordinates. (iv) Convergence, scale factors and arc to chord corrections.  (v) Worldwide cartographic systems Including UTM, GK and UPS.\n\n**Learning Outcomes:**\nClassify the properties of projections.   Use parameters associated with map projections to compute distortion and apply corrections between geodetic and grid coordinates.   Use geometrical properties of map projections to contrast and compare the use of different projections for different applications."
        },
        {
            "type": "I",
            "id": "F1.6a",
            "desc": "Trigonometry",
            "info": "**Content:**\n(i) Plane trigonometry (ii) Sphere, great circle, rhumb lines, spherical triangles and spherical excess\n\n**Learning Outcomes:**\nApply plane and spherical trigonometry to surveying problems."
        },
        {
            "type": "I",
            "id": "F1.6b",
            "desc": "Theory of observations",
            "info": "**Content:**\n(i) Measurements and observation equations  (ii) Notion of uncertainty related to observations (iii) Accuracy, precision, reliability, repeatability (iv) Linearized observation equations and variance propagation law (v) Propagation of uncertainty in observations  through multiple measurements (vi) Relative and absolute confidence ellipse\n\n**Learning Outcomes:**\nDifferentiate between accuracy, precision, reliability and repeatability of measurements. Relate these notions to statistical information.  Apply the variance propagation law to a simple observation equation, and derive an estimate uncertainty as a function of observations covariances."
        },
        {
            "type": "I",
            "id": "F1.6c",
            "desc": "Least squares",
            "info": "**Content:**\n(i) Least squares principle (ii) Covariance of observation (iii) Weighted least squares (iv) Orthogonal least square (v) Total Least Square (vi) Problems with explicit solutions (vii) Condition equations (viii) Covariance of estimated parameters (ix) Unit variance factor estimate  (x) Internal and external reliability\n\n**Learning Outcomes:**\nSolve geodetic problems by least squares estimation.  Determine quality measures for least square solution to geodetic problems, to include reliability and confidence levels."
        },
        {
            "type": "H",
            "desc": "F2: Oceanography"
        },
        {
            "type": "I",
            "id": "F2.1a",
            "desc": "Water masses and circulation",
            "info": "**Content:**\n(i) Global ocean circulation (ii) Mechanisms of regional circulation. (iii) Global and local water masses and their physical properties. (iv) World oceanographic databases (v) Seasonal and daily variability of temperature and salinity profiles. (vi) Types of estuaries and their associated salinity profiles.\n\n**Learning Outcomes:**\nUse the knowledge of spatial and temporal variability of the water masses to plan surveys.  Establish a water column sampling regime for use within survey operations."
        },
        {
            "type": "I",
            "id": "F2.1b",
            "desc": "Physical properties of sea water",
            "info": "**Content:**\n(i) Sound Velocity Profilers, Conductivity, Temperature, Depth sensors, Expendable probes. (ii) Units used in measuring and describing physical properties of sea water, normal ranges and relationships including: salinity, conductivity, temperature, pressure, density.  (iii) Sound speed equations (iv) Oceanographic sampling. (v) Oceanographic sensors: \uf0b7 Current meters \uf0b7 ADCP \uf0b7 Turbidity sensors and need for calibration\n\n**Learning Outcomes:**\nSpecify oceanographic sensors to measure physical properties of sea water.  Apply appropriate equation to estimate density and speed of sound.  Create a sound speed profile."
        },
        {
            "type": "I",
            "id": "F2.1c",
            "desc": "Oceanographic measurements",
            "info": "**Learning Outcomes:**\nSpecify equipment and procedures for oceanographic measurement to meet survey requirements.  Configure and use oceanographic sensors and sampling equipment."
        },
        {
            "type": "I",
            "id": "F2.1d",
            "desc": "Waves",
            "info": "**Content:**\n(i) Wave measurement by radar and buoys (ii) Wave parameters and elements involved in the wave growth process including fetch and bathymetry (iii) Tsunamis (iv) Breaking waves, long-shore drift and rip current processes in relation to beach surveys. (v) Beach profiles\n\n**Learning Outcomes:**\nOutline wave generation processes.  Describe the principles of wave measurement systems.  Describe how beach survey monitoring strategies are related to wave regimes."
        },
        {
            "type": "H",
            "desc": "F3: Geology and Geophysics"
        },
        {
            "type": "I",
            "id": "F3.1a",
            "desc": "Earth structure",
            "info": "**Content:**\n(i) Plate tectonics and other Earth processes (ii) Earthquakes zones (iii) Types of continental margins (iv) Ocean basins, trenches, ridges and other ocean floor features (v) Different types of rocks in the marine environment (vi) Subsidence and uplift\n\n**Learning Outcomes:**\nDescribe the structure of the Earth and explain the relationship between Earth processes and bathymetric /topographic features of the Earth."
        },
        {
            "type": "I",
            "id": "F3.1b",
            "desc": "Geomorphology",
            "info": "**Content:**\n(i) Types of coast (ii) Seafloor features and bed forms (iii) Erosion, transport and deposition (iv) Estuaries and inlets (v) Seafloor temporal variability (vi) Sediment sampling\n\n**Learning Outcomes:**\nInterpret geological information and relate expected seafloor features to hydrographic survey methodology and need for repeated hydrographic surveys."
        },
        {
            "type": "I",
            "id": "F3.1c",
            "desc": "Substrates",
            "info": "**Content:**\n(i) Sediment types (ii) Outcropping rocks (iii) Submerged aquatic vegetation  (iv) Corals\n\n**Learning Outcomes:**\nPredict seafloor type and characteristics based on observations of local geological information."
        },
        {
            "type": "I",
            "id": "F3.2a",
            "desc": "Gravity fields and gravity surveys",
            "info": "**Content:**\n(i) Gravity meters  (ii) Relative and absolute gravity measurements  (iii) Bathymetric corrections for gravity measurements (iv) Local gravity anomalies and gravity surveys (v) Influence of gravity on sea surface topography and correlation with seafloor features\n\n**Learning Outcomes:**\nExplain the principle of operation of gravity meters and the need for corrections.  Discuss the objectives of gravity surveys in relation to seabed features."
        },
        {
            "type": "I",
            "id": "F3.2b",
            "desc": "Magnetic fields",
            "info": "**Content:**\n(i) Magnetic fields of the Earth (ii) Magnetic anomalies in relation to rock types and tectonic history (iii) Temporal variations (iv) Magnetic Earth models and databases\n\n**Learning Outcomes:**\nDescribe the Earth magnetic field, its spatial and temporal variability."
        },
        {
            "type": "I",
            "id": "F3.2c",
            "desc": "Seismic surveys",
            "info": "**Content:**\n(i) Continuous reflection/refraction seismic profiling.  (ii) Typical sound sources, receivers and recorders. (iii)  Analogue high resolution seismic systems (including pinger, boomers, sparkers, chirp) (iv) Frequency and wavelength in relation to resolution and penetration (v) Equipment configuration for towing, launch and recovery (vi) Applications such as pipeline or hazard detection, seabed sediment identification for mapping, shallow sedimentary channels. (vii) Principles of seismic stratigraphy\n\n**Learning Outcomes:**\nEvaluate coverage and penetration of systems and correlate equipment with applications.  Distinguish between noise, outliers, and real seafloor features and sub-seafloor geometry"
        },
        {
            "type": "H",
            "desc": "H1: Positioning"
        },
        {
            "type": "I",
            "id": "H1.1a",
            "desc": "Common reference frames for sensors",
            "info": "**Content:**\n(i) Identification of a common reference point and reference frame for the vessel (ii) Centre of rotation for the vessel (iii) Centers of measurement for sensors (iv) Sensor offset measurements.\n\n**Learning Outcomes:**\nSpecify a suitable vessel reference frame for sensor offsets and configure software to use values accordingly.  Reconcile the application of offsets between various hardware and software components of the survey system."
        },
        {
            "type": "I",
            "id": "H1.1b",
            "desc": "Integration of reference frames",
            "info": "**Content:**\n(i) Sensor body reference frames. (ii) Transformations between reference frames associated with sensor bodies, the vessel and local geodetic frame.\n\n**Learning Outcomes:**\n(i) Sensor body reference frames. (ii) Transformations between reference frames associated with sensor bodies, the vessel and local geodetic frame."
        },
        {
            "type": "I",
            "id": "H1.2a",
            "desc": "GNSS signals",
            "info": "**Content:**\n(i) GNSS Systems, such as GPS, GLONASS, Galileo, Beidou, etc. (ii) Signal structure. (iii) Frequencies, time keeping and logistical segments: Ground, Space, User.  (iv) Broadcast almanac ephemerides and precise orbit information. (v) Ionospheric and tropospheric effects. (vi) Earth rotation information.\n\n**Learning Outcomes:**\nDescribe the structure of signals broadcast by GNSS and explain the impact of the atmosphere on these signals. (I)  Describe the characteristics of different components of GNSS and detail sources of information relating to the orbital and timing parameters. (B)"
        },
        {
            "type": "I",
            "id": "H1.2b",
            "desc": "GNSS observables",
            "info": "**Content:**\n(i) Code phase and carrier phase observables, mixed observables.  (ii) Differencing using carrier phase including single, fixed and float double, and triple differences. (iii) Corrections for earth rotation, ionosphere, and troposphere.\n\n**Learning Outcomes:**\nWrite observation equations for different GNSS observables and develop mathematical and stochastic models for the solutions that include earth rotation and ionospheric elements."
        },
        {
            "type": "I",
            "id": "H1.2c",
            "desc": "Relative and absolute techniques",
            "info": "**Content:**\n(i) Differential and Wide area augmentation services. (ii) Real time kinematic and postprocessed kinematic techniques. (iii) Precise Point Positioning techniques and services. (iv) System selection in alignment with survey requirements.\n\n**Learning Outcomes:**\nEvaluate and select appropriate system for applications by aligning survey requirements with capabilities and limitations of GNSS techniques"
        },
        {
            "type": "I",
            "id": "H1.2d",
            "desc": "Installation and operation",
            "info": "**Content:**\n(i) Antenna installation to consider coverage, stability and multipath environment. (ii) Levels of redundancy in systems and communications (iii) Data exchange formats and protocols such as RINEX and NMEA\n\n**Learning Outcomes:**\nSpecify, supervise and test the installation of GNSS hardware and software for both inshore and offshore operations."
        },
        {
            "type": "I",
            "id": "H1.2e",
            "desc": "Quality control",
            "info": "**Content:**\n(i) Sources of error including multipath, atmospheric effects, base station network, sensor offsets, etc. (ii) Measures and monitoring of precision (DOP variations) and reliability (statistical testing).  (iii) Integrity monitoring of base station data.  (iv) Verification checks between systems or against known points.\n\n**Learning Outcomes:**\nDevelop a quality control plan for GNSS operations including risk management associated with GNSS components and services.  Assess the performance of GNSS positioning against the defined quality control criteria."
        },
        {
            "type": "I",
            "id": "H1.3a",
            "desc": "Accelerometers and gyroscopes, inclinometers, and compass",
            "info": "**Content:**\n(i) Accelerometers technology (pendulums, vibrating elements) (ii) Gyroscopes (FOG, Ring laser, Sagnac effect) (iii) MEMS (iv) Inclinometers (v) Flux gate compass\n\n**Learning Outcomes:**\nDescribe accelerometer technologies, and differentiate between inclinometers, compass and gyroscopes. Describe error sources associated with these devices."
        },
        {
            "type": "I",
            "id": "H1.3b",
            "desc": "Strap down inertial measurement units",
            "info": "**Content:**\n(i) Technologies available for IMU measurements through gyroscopes and accelerometers  (ii) Sources of error in inertial sensors: bias; scale factor; and, noise. (iii) The inertial navigation equation and error equations. (iv) Static alignment of the IMU. (v) Heave estimation from gyros and accelerometers. (vi) Induced heave.\n\n**Learning Outcomes:**\nDescribe the technologies used in inertial measurements and quantify associated navigation errors.  Undertake static alignment of an IMU.   Develop strategies for mitigating induced heave and select filter parameters for heave estimation."
        },
        {
            "type": "I",
            "id": "H1.3c",
            "desc": "Kalman filtering",
            "info": "**Content:**\n(i) Bayesian estimation  (ii) State representation of a dynamic observation equation, observability (iii) Continuous, Semi-discrete and discrete Kalman filtering (iv) Optimal smoothing\n\n**Learning Outcomes:**\nApply Kalman filtering methods to a dynamic observation process.   Define the parameters of a Kalman Filter in relation with sensors performances and dynamic model uncertainty.   Differentiate between stationary and nonstationary observation processes"
        },
        {
            "type": "I",
            "id": "H1.3d",
            "desc": "Aided inertial navigation",
            "info": "**Content:**\n(i) INS and GNSS loosely and tightly coupled solutions. (ii) Velocity and ranging aided INS navigation. (iii) Dynamic and aided alignment of INS by Kalman filtering. (iv) INS solutions from IMU and other sensors by Kalman filtering and smoothing.\n\n**Learning Outcomes:**\nDescribe the role of aiding sensors to reduce INS navigation drift. Apply appropriate settings to filtering and smoothing for aided navigation solutions."
        },
        {
            "type": "I",
            "id": "H1.4a",
            "desc": "Acoustic positioning principles",
            "info": "**Content:**\n(i) Long base line (ii) Short baseline (iii) Ultra-short baseline (iv) Doppler velocity log (v) Transponders (vi) Acoustic modems (vii) Subsea INS (viii) Water column structure (ix) Acoustic ray multipath (x) Time synchronization\n\n**Learning Outcomes:**\nDescribe the signal structure and observables of mobile and fixed acoustic positioning devices.   Relate observables and platform orientation to relative positions through observation equations."
        },
        {
            "type": "I",
            "id": "H1.4b",
            "desc": "Acoustic positioning systems",
            "info": "**Learning Outcomes:**\nExplain how acoustic positioning observables, orientation and surface positioning data are used to achieve subsea rover spatial referencing.  Specify the deployment and calibration methods for fixed and mobile acoustic positioning systems."
        },
        {
            "type": "I",
            "id": "H1.4c",
            "desc": "Acoustic positioning error analysis",
            "info": "**Learning Outcomes:**\nCompute the total propagated uncertainty in acoustic positioning, accounting for time, sound speed and other observable errors."
        },
        {
            "type": "I",
            "id": "H1.4d",
            "desc": "Acoustic positioning applications",
            "info": "**Content:**\n(i) Towed vehicles (ii) Autonomous vehicles (iii) ROVs (iv) Surface vessel dynamic positioning (v) Engineering and installation (vi) Metrology\n\n**Learning Outcomes:**\nIdentify appropriate acoustic positioning solutions for different applications, considering potential sources of error."
        },
        {
            "type": "I",
            "id": "H1.5a",
            "desc": "Track guidance",
            "info": "**Content:**\n(i) Track guidance and route following information systems. (ii) Tolerances for track guidance in compliance with survey specifications and positioning system precision. (iii) Maintaining uniform sounding density in swath systems.  (iv) The impact of the environment on the line keeping and data density (v) Options for accepting filed data when the navigation or line keeping is not optimal.\n\n**Learning Outcomes:**\nSpecify the methods to be used in maintaining a survey vessel or remote survey system on a planned survey line or route and meeting sounding density specifications.   Describe what may occur if the real-time navigation systems are interrupted during a survey.  Explain how to compensate and mitigate for the effects of strong currents across a survey area/in a river estuary."
        },
        {
            "type": "H",
            "desc": "H2: Underwater Sensors and Data Processing"
        },
        {
            "type": "I",
            "id": "H2.1a",
            "desc": "Transducers and generation of acoustic waves",
            "info": "**Content:**\n(i) Piezoelectric principles (ii) Transducer arrays design, beam-forming, side lobes. (iii) Transducer Quality factor (iv) Plane and spherical waves in terms of wavelength, amplitude and frequency. (v) Absorption, spherical spreading (vi) Frequency, attenuation relationship to range (vii) Acoustic units, intensities and sound levels (viii) Signal to noise ratio (ix) Active Sonar Equation including sound source, causes of propagation loss in relation to water properties together with characteristics of the sea floor and targets, acoustic noise level and directivity (x) Continuous Wavelength (CW), Chirp transmission (xi) System parameters including bandwidth, pulse length, pulse repetition rate, gain, detection  threshold. (xii) Range resolution and spatial resolution. (xiii) Dynamic range, clipping and saturation (xiv) Sound speed profile and gradient (xv) Ray-tracing theory (xvi) Sound channel (xvii) Non horizontal  sound speed layers\n\n**Learning Outcomes:**\nAnalyze the effect of transducer design on beam characteristics and performance. Describe the design and use of multifrequency, wide-bandwidth and parametric transducers.  Differentiate between chirp and CW transmission, and characterize their relative performance.  Determine source level from typically available sonar specification."
        },
        {
            "type": "I",
            "id": "H2.1b",
            "desc": "Propagation of acoustic waves",
            "info": "**Learning Outcomes:**\nExplain how properties of the acoustic medium and source frequency affect the propagation of acoustic waves. Calculate propagation loss in practical situations, using medium property observations and available tables."
        },
        {
            "type": "I",
            "id": "H2.1c",
            "desc": "Acoustic noise",
            "info": "**Learning Outcomes:**\nIdentify the sources of noise and describe the effect of noise on echo sounding. Define the directivity index. Calculate the effect on sonar range of a variety of noise conditions and sonar directivity circumstances."
        },
        {
            "type": "I",
            "id": "H2.1d",
            "desc": "Reflection, scattering and system performance",
            "info": "**Learning Outcomes:**\nDefine the characteristic impedance of an acoustic medium.   Assess the effects of varying seafloor composition, texture, and slope on echo strength."
        },
        {
            "type": "I",
            "id": "H2.1e",
            "desc": "Refraction and ray-tracing",
            "info": "**Learning Outcomes:**\nUse the sound speed profile to compute the path of sound ray through the water column."
        },
        {
            "type": "I",
            "id": "H2.2a",
            "desc": "Single beam echo sounders principles",
            "info": "**Content:**\n(i) Single beam, split beam and dual beam concepts (ii) Beam footprint (iii) Specification of a single beam echo sounder. (iv) Bottom detection principles (matched filtering, thresholding) and range resolution. (v) Full-echo-envelope returns and bottom characterization\n\n**Learning Outcomes:**\nExplain the principles of operation of a single beam sounder detailing how acoustic parameters influence sounder returns."
        },
        {
            "type": "I",
            "id": "H2.2b",
            "desc": "Single beam returns interpretation",
            "info": "**Learning Outcomes:**\nInterpret single beam returns including analysis of full echo envelopes and features of the sea bed and water column."
        },
        {
            "type": "I",
            "id": "H2.2c",
            "desc": "Single beam survey system",
            "info": "**Content:**\n(i) Components of a single beam echo sounder system to include:  positioning system, motion sensor, acquisition system, source of reference level (i.e. tide gauge, GNSS) (ii) Acoustic parameters of single beam echo-sounders (iii) Reduction of soundings to the specified datum\n\n**Learning Outcomes:**\nSpecify survey system to perform a single beam survey in accordance with application requirements.  Select appropriate range, scale, frequency and pulse for specific applications in relation to spatial resolution, bottom penetration, depth of water and water column analysis."
        },
        {
            "type": "I",
            "id": "H2.2d",
            "desc": "Processing of single beam data",
            "info": "**Content:**\n(i) Systematic effects in system components: \uf0b7 Single Beam EchoSounders \uf0b7 IMU/INS \uf0b7 Sound speed profilers and other peripheral sensors (ii) Single beam echo sounders data processing workflows\n\n**Learning Outcomes:**\nSpecify processing workflow for single beam data. (I)  Integrate and merge data of various sources and of various types in preparation for product generation. (A)"
        },
        {
            "type": "I",
            "id": "H2.3a",
            "desc": "Side-scan sonar systems",
            "info": "**Content:**\n(i) Principles, components and geometry of side scan sonar systems (ii) Range, beam angle (iii) Resolution in relation to beam width, sampling rate angle of incidence and pulse length.\n\n**Learning Outcomes:**\nEvaluate, select and configure side-scan sonar in alignment with survey operational needs."
        },
        {
            "type": "I",
            "id": "H2.3b",
            "desc": "Synthetic Aperture Sonar",
            "info": "**Content:**\n(i) Principles of synthetic aperture imaging\n\n**Learning Outcomes:**\nDiscuss and compare the use of SAS with that of more conventional sonar imaging systems."
        },
        {
            "type": "I",
            "id": "H2.4a",
            "desc": "Multi-beam echo sounders",
            "info": "**Content:**\n(i) Principles and geometry of multi-beam sonar systems  (ii) Combination of transducer elements into transmit and receive arrays.   (iii) Beam stabilization and beam steering (iv) Amplitude and phase bottom detection (v) Variations in beam spacing and footprint size (vi) Backscatter recording modes (e.g., beam average, side scan time series, beam time series) (vii) Backscatter and seabed classification (viii) Water column data (ix) Power, gain, pulse length (x) Multiple signal returns, aliasing of multiple signals in the water.\n\n**Learning Outcomes:**\nExplain the basic principles of multi-beam sonar transmit and receive beam forming and beam steering.  (I)  Explain the effect of aperture size and element spacing on array performance. (I)  Analyze the techniques of amplitude and phase methods of bottom detection and relate them to depth uncertainty. (A)"
        },
        {
            "type": "I",
            "id": "H2.4b",
            "desc": "Multi-beam system parameters",
            "info": "**Learning Outcomes:**\nTune acoustic parameters on-line for depth and backscatter.  Determine the beam footprint size and sounding spacing across the swath and assess the limitations and likelihood of detecting objects on the seafloor under varying surveying conditions. Explain the use of water column returns and differentiate from bottom detection."
        },
        {
            "type": "I",
            "id": "H2.4c",
            "desc": "Multi-beam systems",
            "info": "**Content:**\n(i) positioning system,  telemetry, motion and attitude sensors,  (ii) acquisition system,  (iii) source of reference level (i.e. tide gauge, GNSS),  (iv) Sound Speed measurements\n\n**Learning Outcomes:**\nSpecify survey system to perform a multibeam survey in accordance with application requirements."
        },
        {
            "type": "I",
            "id": "H2.4d",
            "desc": "Multi-beam data processing",
            "info": "**Content:**\n(i) Multi-beam  data elements: (ii) Beam and travel-time data (iii) IMU/INS (iv) Positioning data (v) Time stamping (vi) Offsets between sensor reference points (vii) Sound speed profile (viii) Data file formats\n\n**Learning Outcomes:**\nDescribe how and where data elements are combined to produce geo-referenced soundings.  Integrate and merge data elements in preparation for data processing."
        },
        {
            "type": "I",
            "id": "H2.4e",
            "desc": "Interferometric Sonar",
            "info": "**Content:**\n(i) Principles and geometry of interferometric (phase measurement) sonar systems (ii) Sounding determination principles (iii) Mounting methods and towing (iv) Transducers arrangement (v) Sounding filtering and binning techniques\n\n**Learning Outcomes:**\nAnalyze the principles and geometry of interferometry and phase differencing bathymetric sonars and the arrangement of transducer arrays.  Explain the need for filtering phase measurement data for depth, object detection and backscatter. Explain the effect of aperture size and transducer geometry on array performance.   Assess the relative merits of multi-beam and phase differencing systems for specific mapping applications in water depths from very shallow to full ocean depths."
        },
        {
            "type": "I",
            "id": "H2.5a",
            "desc": "Backscatter from side scan and MBES",
            "info": "**Content:**\n(i) Relationship between backscatter content and characteristics of the seabed, water column properties and  acoustic signal parameters (ii) Generation of backscatter information within acoustic systems (iii) Principle of backscatter compensation for absorption, incidence angle, gain and power (iv) Mosaicing\n\n**Learning Outcomes:**\nSpecify and configure a side scan sonar and a swath echo sounder for backscatter acquisition under varying environmental conditions and for specific application.   Monitor and assess quality on-line and apply appropriate compensation.  Apply backscatter principles to produce a compensated backscatter mosaic."
        },
        {
            "type": "H",
            "desc": "H3: LiDAR and Remote Sensing"
        },
        {
            "type": "I",
            "id": "H3.1a",
            "desc": "Airborne LiDAR systems",
            "info": "**Content:**\n(i) Wavelength, water penetration, ground detection and laser safety. (ii) Scanning frequency and pattern in relation to power, coverage and spatial density. (iii) Influence of sea surface roughness, water column turbidity on the beam pattern and penetration. (iv) Sea bed optical characteristics and bottom detection. (v) Influence of seabed on reflectance (vi) Relationship between full waveform signature and seabed characteristics.   (vii) Secchi disc and Secchi depth (viii) Impact of structure and canopy on topographic LiDAR (ix) Optical characteristics of coastal terrain. (x) Influence of geometry and waveform on feature detection. (xi) Integration of components including time stamping, attitude compensation, sensor offsets and networking. (xii) Sources and levels of uncertainty associated with LiDAR data and products. (xiii) Combined bathymetric and topographic LiDAR systems (xiv) Vessel-based LiDAR\n\n**Learning Outcomes:**\nDetermine the applicability of topographic and bathymetric LiDAR to specific mapping applications. Specify the appropriate LiDAR technology for given applications and identify supporting survey operations required to conduct the survey and process data."
        },
        {
            "type": "I",
            "id": "H3.1b",
            "desc": "Airborne LiDAR data products",
            "info": "**Learning Outcomes:**\nIdentify potential sources of error in combined topographic and bathymetric LiDAR data and apply corrective processing techniques as appropriate. (I) Evaluate results (x,y,z) of specific bathymetric LiDAR surveys for compliance with hydrographic requirements. (I) Explain how to incorporate information from full waveform analysis in the production of LiDAR mapping products. (A)"
        },
        {
            "type": "I",
            "id": "H3.1c",
            "desc": "Terrestrial LiDAR",
            "info": "**Learning Outcomes:**\nDetermine situations where terrestrial and vessel-based LiDAR data can be used to complement other coastal and offshore spatial data. Explain the need for calibration and validation of vessel-based LiDAR and describe how data from such system will be integrated with other data streams."
        },
        {
            "type": "I",
            "id": "H3.2a",
            "desc": "Remotely sensed bathymetry",
            "info": "**Content:**\n(i) Multispectral imagery and water penetration in relation to wavelength (ii) Optical properties of sea water. (iii) Model based and empirical inversion methods for determining bathymetry. (iv) Atmospheric corrections. (v) Spatial resolution and accuracy in position and depth. (vi) Reflectance properties of the sea floor.\n\n**Learning Outcomes:**\nExplain and compare the methods that enable depth to be determined from wavelength together with optical properties of both the water and the seabed."
        },
        {
            "type": "I",
            "id": "H3.2b",
            "desc": "Satellite altimetry",
            "info": "**Content:**\n(i) Missions and sensors (ii) Products\n\n**Learning Outcomes:**\nDescribe the principles and limitations of satellite altimetry products including sea-surface topography and derived bathymetry"
        },
        {
            "type": "I",
            "id": "H3.2c",
            "desc": "Optical methods of shoreline delineation",
            "info": "**Content:**\n(i) Color imagery and multispectral imagery. (ii) Reflectance of multispectral imagery in relation to wavelength and terrain characteristics. (iii) Use of imagery in shoreline mapping and identification of other topographic features. (iv) Uncertainty associated with map features derived from imagery. (v) Geometrical properties of satellite images and aerial photographs\n\n**Learning Outcomes:**\nDescribe geometrical properties of images and principles of orthorectification.  Explain how imagery can be used in planning survey operations and in supporting hydrographic products.  Compare image based methods with those of LiDAR for shoreline delineation"
        },
        {
            "type": "H",
            "desc": "H4: Survey Operations and Applications"
        },
        {
            "type": "I",
            "id": "H4.1a",
            "desc": "Hydrographic survey requirements",
            "info": "**Content:**\n(i) IHO S-44 and other survey quality standards. (ii) Underkeel clearance (iii) Procedures and installations required to conduct hydrographic surveys of specific types, for example: \uf0b7 Nautical charting survey \uf0b7 Boundary delimitation survey \uf0b7 Ports, harbor and waterways surveys. \uf0b7 Engineering works and dredging surveys \uf0b7 Coastal engineering surveys \uf0b7 Inland surveys \uf0b7 Erosion and land-sea interface monitoring \uf0b7 Oceanographic surveys \uf0b7 Deep sea and ROVs /AUVs surveys \uf0b7 Seismic, gravity and geomagnetic surveys \uf0b7 Pipeline route, pipeline installation, inspection and cable laying surveys \uf0b7 Wreck and debris surveys.\n\n**Learning Outcomes:**\nEstablish procedures required to achieve quality standards in hydrographic surveys.  Specify the type of survey system and equipment needs together with associated parameters and procedures for various components of the overall survey operation.   Evaluate the impact of local physical and environmental factors on survey results."
        },
        {
            "type": "I",
            "id": "H4.1b",
            "desc": "Hydrographic survey project management",
            "info": "**Content:**\n(i) Hydrographic instructions and tenders. (ii) Estimating and drafting survey work plans and schedules (iii) Risk assessment in survey operations associated with the proposed work plan. (iv) Assessment and reporting of work progress against the work plan (v) Health and safety compliance (vi) Environmental impact of survey activities (vii) Emergency Response Situations and Plan\n\n**Learning Outcomes:**\nPrepare hydrographic specifications, instructions and tenders associated with survey objectives. Estimate the resources, scheduling and timing associated with hydrographic projects and prepare project plans including health and safety requirements, environmental issues and emergency response.   Define, assign and distribute the roles and responsibilities of individuals within a survey team.   Prepare progress reports and submit interim project deliverables."
        },
        {
            "type": "I",
            "id": "H4.2a",
            "desc": "Survey planning",
            "info": "**Content:**\n(i) Components of survey planning including on-board equipment, platform\u2019s dynamic positioning, remote installations, data from satellites and telemetry links. (ii) Planning of survey operation considering general depth, bottom character, water column variability, weather, currents, tides, coastal features and vessel/flight safety. (iii)  Logistical considerations for survey operations (iv) Maintaining safe working conditions.\n\n**Learning Outcomes:**\nPlan survey lines and schedule to accommodate environmental and topographic conditions for the vessel or aircraft and for towed, remote and autonomous vehicles."
        },
        {
            "type": "I",
            "id": "H4.2b",
            "desc": "Single Beam operations",
            "info": "**Content:**\n(i) Transducer mounting (ii) Calibration techniques and requirements (iii) Line spacing, orientation and line planning (iv) Causes and effects of motion artefacts and water properties artefact on data (v) Integration with ancillary systems (vi) Compensation for vessel motion, attitude, dynamic draft (vii) Feature development (viii) Data logging parameters\n\n**Learning Outcomes:**\nSpecify survey procedures and quality assurance practices to perform a single beam survey in accordance with application requirements.  Select appropriate range, scale, frequency and pulse repetition rate for specific application in relations to spatial resolution, bottom penetration, depth of water, and water column analysis."
        },
        {
            "type": "I",
            "id": "H4.2c",
            "desc": "Multi-beam and Interferometric operations",
            "info": "**Content:**\n(i) Selection of platform and deployment (hull mount, pole mount, AUV, ROV) (ii) Swath coverage and resolution (iii) Object detection (iv) Sound speed profile (v) Survey speed in relation to system parameters (vi) Causes and effects of motion artefacts and water property artefacts on data (vii) Swath planning (viii) Calibration methods and procedures (ix) Ancillary sensors and integration (x) On-line monitoring of data being acquired (xi) Uncertainty models\n\n**Learning Outcomes:**\nSpecify survey procedures and quality assurance practices to perform a multibeam or interferometric survey in accordance with application requirements.  Identify deficiencies in multi-beam echo sounder or interferometric sonar data, relate issues encountered to system or operational factors and respond appropriately."
        },
        {
            "type": "I",
            "id": "H4.2d",
            "desc": "Magnetic surveys",
            "info": "**Content:**\n(i) Operating principles and sensitivity characteristics of magnetometers and gradiometers (ii) Deployment of magnetometers and gradiometers and planning of magnetic surveys (iii) Objectives of magnetic surveys in the detection of objects such as pipelines, cables, ordnance, debris, wrecks. (iv) Display and interpretation of magnetometer and gradiometer data.\n\n**Learning Outcomes:**\nDescribe the capabilities and limitations of magnetometers and gradiometers in conducting object detection surveys."
        },
        {
            "type": "I",
            "id": "H4.2e",
            "desc": "Airborne LiDAR surveys",
            "info": "**Content:**\n(i) Calibration techniques and requirements (ii) Flight line spacing, ground speed, orientation and aircraft turning characteristics (iii) Environmental factors affecting data coverage (i.e., sunlight, clouds, rain, smoke, sea conditions, etc.)\n\n**Learning Outcomes:**\nSpecify survey procedures and quality assurance practices to perform a LiDAR survey in accordance with application requirements.  Specify LiDAR coverage and data density requirements for a survey.  Assess LiDAR survey data (xyz point cloud and resultant depth grid) for adequacy and quality of overlap with adjacent acoustic survey data.  Consider operational and environmental conditions in planning LiDAR surveys."
        },
        {
            "type": "I",
            "id": "H4.2f",
            "desc": "Side scan sonar operations",
            "info": "**Content:**\n(i) Selection of platform and deployment (tow, hull mount, AUV) (ii) Elevation above the seafloor. (iii) Swath coverage (iv) Survey speed in relation to sonar system parameters (v) Towfish positioning (vi) Target aspect (vii) Effects of motion and water properties on images (viii) Layback calculations\n\n**Learning Outcomes:**\nDesign and conduct a side scan sonar survey as part of an integrated data acquisition system in compliance with survey objectives.  Explain and identify the effects of stratification of the water column and develop mitigating strategies for surveying in a variety of environmental conditions."
        },
        {
            "type": "I",
            "id": "H4.2g",
            "desc": "Side-scan sonar data interpretation",
            "info": "**Content:**\n(i) Side scan sonar backscatter and sea floor reflection. (ii)  Side scan images and mosaicking (iii) Sources of distortion and artefacts from water column properties, motion (iv) Determination of height, size and position of seafloor features  (v) Sonar signature of wrecks, pipelines, gas, fish and fresh water, etc.\n\n**Learning Outcomes:**\nInterpret side scan sonar imagery through assessment of individual and overlapping swaths to identify potential sonar targets for further investigation.    Interpret side scan sonar imagery to assess differences in seafloor composition and topography."
        },
        {
            "type": "I",
            "id": "H4.3a",
            "desc": "Classification from acoustic data",
            "info": "**Content:**\n(i) SBES full echo envelope (ii) Sub-bottom profiler full echoenvelope (iii) Side scan sonar images (iv) Synthetic aperture sonars images (v) Side scan sonar and swath echo sounders backscatter information (vi) Ground-truthing\n\n**Learning Outcomes:**\nExplain the concept of incidence angle dependence and describe the signal processing steps required to obtain corrected backscatter data for seafloor characterization.   Explain the techniques available and their limitations for observing, interpreting and classifying differences in seabed characteristics from acoustic sensors."
        },
        {
            "type": "I",
            "id": "H4.3b",
            "desc": "Classification from optical data",
            "info": "**Content:**\n(i) Hyperspectral and multispectral sensors images (ii) Underwater cameras (iii) LiDAR (iv) Ground-truthing\n\n**Learning Outcomes:**\nExplain the techniques available and their limitations for observing and interpreting differences in seabed and inter-tidal zone characteristics from optical sensors."
        },
        {
            "type": "I",
            "id": "H4.3c",
            "desc": "Seabed sampling",
            "info": "**Content:**\n(i) Grabs (ii) Corers (iii) Use in ground-truthing\n\n**Learning Outcomes:**\nPlan a sampling campaign to classify the seabed as part of a survey.  Use remotely sensed information to select sampling sites."
        },
        {
            "type": "I",
            "id": "H4.3d",
            "desc": "Seabed characterization",
            "info": "**Content:**\n(i) Classification standards (ii) Classification methods\n\n**Learning Outcomes:**\nConsider the combination of remotely sensed information with seabed samples in a seafloor characterization survey.   Apply classification standards to seabed characterization results."
        },
        {
            "type": "H",
            "desc": "H5: Water Levels and Flow"
        },
        {
            "type": "I",
            "id": "H5.1a",
            "desc": "Tide theory",
            "info": "**Content:**\n(i) Tide generating forces, the equilibrium and real tides.  (ii) Tide constituents and different types of tide.  (iii) Amphidromic points and cotidal and co-range lines. (iv) Geomorphological and basin influences on tidal characteristics\n\n**Learning Outcomes:**\nCharacterize features of the tide in terms of tide raising forces and local hydrographic features."
        },
        {
            "type": "I",
            "id": "H5.1b",
            "desc": "Non-tidal water level variations",
            "info": "**Content:**\n(i) Changes in water level caused by: atmospheric pressure, wind, seiches, ocean temperature and precipitation.  (ii) Water level variations occurring in inland waters. (iii) Water level variations in estuaries, wet lands and rivers\n\n**Learning Outcomes:**\nEvaluate the effect of non-tidal influences on water levels in the conduct of a hydrographic survey."
        },
        {
            "type": "I",
            "id": "H5.2a",
            "desc": "Water level gauges",
            "info": "**Content:**\n(i) Principles of operation of various types of water level gauges including pressure (vented and unvented), GNSS buoys, float, radar, acoustic sensors and tide poles. (ii) Installing gauges, establishment and levelling of associated survey marks (iii) Determination of tide correctors from  water level observations (iv) Networks of water level gauges (v) Use of satellite altimetry in determining water levels (vi) Uncertainties associated with water level measurement devices (vii) Uncertainties associated with duration of observations. (viii) Uncertainties associated with spatial separation of water level measurements.\n\n**Learning Outcomes:**\nSelect appropriate type of water level gauge technology according to survey project operations.   Install, level to a vertical reference, and calibrate a water level gauge while evaluating sources of errors and applying appropriate corrections."
        },
        {
            "type": "I",
            "id": "H5.2b",
            "desc": "Tidal measurement",
            "info": "**Learning Outcomes:**\nEvaluate and select appropriate sites for water level monitoring.  Select water level gauge parameters for logging data, data communication, data download and for network operation with appropriate quality control measures."
        },
        {
            "type": "I",
            "id": "H5.2c",
            "desc": "Uncertainty in water level",
            "info": "**Learning Outcomes:**\nAssess and quantify the contribution of water level observations to uncertainties in survey measurements.  Assess the uncertainty in water level observations due to duration of observations and distance from water level gauge."
        },
        {
            "type": "I",
            "id": "H5.3a",
            "desc": "Harmonic analysis",
            "info": "**Content:**\n(i) Harmonic constituents from  astronomical periods (ii) Harmonic coefficients and residuals. (iii) Water level time series observations (iv) Fourier series and Fourier analysis (v) Tide tables and tide prediction\n\n**Learning Outcomes:**\nCompute standard harmonic constituents from astronomical periods.  Derive harmonic coefficients and residuals from times series observations using Fourier analysis.   Describe the computation of tide tables from harmonic coefficients.  Compare the tidal characteristics and residuals of two tide stations using harmonic analysis."
        },
        {
            "type": "I",
            "id": "H5.3b",
            "desc": "Ocean water level",
            "info": "**Content:**\n(i) Earth tide (ii) Harmonic astronomic component (iii) Oceanographic components (iv) Meteorological component. (v) Satellite altimetry\n\n**Learning Outcomes:**\nDescribe ocean water level models and observation methods."
        },
        {
            "type": "I",
            "id": "H5.4a",
            "desc": "Separation models",
            "info": "**Content:**\n(i) Single-point and regional models  (ii) Principle of Separation surface construction (iii) Ellipsoid to Chart Datum separation models (iv) Tidally defined vertical datums components, including LAT, HAT, MSL, etc\u2026 (v) Chart Datum and sounding datum (vi) Geoid as a reference surface (vii) Datums in oceans coastal waters, estuaries, rivers and lakes (viii) Interpolation of datums between water level stations (ix) Reduction of survey data to a datum\n\n**Learning Outcomes:**\nExplain the relationship between geoid, ellipsoid, and chart datum.   Apply relevant offsets to convert between datums"
        },
        {
            "type": "I",
            "id": "H5.4b",
            "desc": "Vertical datums",
            "info": "**Learning Outcomes:**\nSelect, establish, interpolate and transfer a vertical datum in various environments."
        },
        {
            "type": "I",
            "id": "H5.4c",
            "desc": "Sounding reduction",
            "info": "**Learning Outcomes:**\nReduce ellipsoidal referenced survey data to a water level datum using an appropriate separation model with an appreciation for associated uncertainty.  Apply tide correctors to reduce survey soundings to a chart datum."
        },
        {
            "type": "I",
            "id": "H5.5a",
            "desc": "Tidally induced currents",
            "info": "**Content:**\n(i) The relationship between currents and tides  (ii) Rectilinear and rotary tidal currents  (iii) current meters,  (iv) acoustic current profilers  (v) Drogues (vi) Surface current radar observation (vii) Static and mobile current measurements (viii) Current surveys  (ix) Portraying current data\n\n**Learning Outcomes:**\nExplain the forces behind tidally induced currents and describe temporal variations.  Differentiate between tidal and non-tidal current."
        },
        {
            "type": "I",
            "id": "H5.5b",
            "desc": "Current measurement, portrayal and surveys",
            "info": "**Learning Outcomes:**\nSelect, use techniques and instruments for current measurement.  Plan current surveys.  Use appropriate methods for processing and displaying current data."
        },
        {
            "type": "H",
            "desc": "H6: Hydrographic Data Acquisition and Processing"
        },
        {
            "type": "I",
            "id": "H6.1a",
            "desc": "Hydrographic data acquisition",
            "info": "**Content:**\n(i) Integration of data from various sensors in accordance with survey specifications to include equipment such as: \uf0b7 Echo-sounder (SBES, MBES) \uf0b7 Terrestrial and airborne LiDAR \uf0b7 Sound velocity profiler, surface velocity probe \uf0b7 Side-scan sonar \uf0b7 Surface positioning system \uf0b7 IMU / INS \uf0b7 Subsea positioning system (USBL) \uf0b7 ROVs and AUVs (ii) Data acquisition system and software (iii) Time-tagging (iv) Data visualization  (v) Data quality control methods (vi) Types and sources of errors (vii) System errors identification methods\n\n**Learning Outcomes:**\nDefine, configure and validate a complex survey suite for different types of surveys in accordance with technical specification.  Specify and configure communication interfaces between survey devices and system components."
        },
        {
            "type": "I",
            "id": "H6.1b",
            "desc": "Real-time data monitoring",
            "info": "**Learning Outcomes:**\nEvaluate performance of an integrated survey system against survey specifications using quality control methods and address deficiencies using troubleshooting methods.  Identify type and sources of system errors and undertake system analysis."
        },
        {
            "type": "I",
            "id": "H6.1c",
            "desc": "Survey data storage and transfer",
            "info": "**Content:**\n(i) Content of files in different formats used to record data in survey planning, data acquisition and products. (ii) Multiple data types  (iii) Storage requirements  (iv) Proprietary vs. standard data format (v) Metadata (vi) Organization of survey databases.\n\n**Learning Outcomes:**\nExport survey data to databases and analysis tools taking account of different data formats.  Employ data storage strategies to facilitate survey data flow.   Populate and maintain metadata associated with different data types and products."
        },
        {
            "type": "I",
            "id": "H6.2a",
            "desc": "Filtering and estimation of single beam data",
            "info": "**Content:**\n(i) Data cleaning techniques (manual and automated) (ii) Identification of outliers (iii) Identification and classification of systematic errors  (iv) Total propagated uncertainty - horizontal (v) Total propagated uncertainty - vertical (vi) Comparing crossing data between survey lines  (vii) Comparing overlapping data between platforms (viii) Assessing coverage in relation with contour lines and features\n\n**Learning Outcomes:**\nIdentify and remove outliers and validate data cleaning and other decisions made in processing single beam data.  Interpret and resolve systematic errors detected during data processing  Perform time series analysis of data from multiple sensors to detect artefacts and other errors that may exist in a survey dataset.  Specify additional coverage and associated survey parameters to resolve shortcomings in survey data."
        },
        {
            "type": "I",
            "id": "H6.2b",
            "desc": "Filtering and estimation of multi-beam data",
            "info": "**Content:**\n(i) Data cleaning techniques (manual and automated) (ii) Identification of outliers (iii) Identification and classification of systematic errors  (iv) Total propagated uncertainty - horizontal (v) Total propagated uncertainty - vertical (vi) Comparing crossing  and adjacent data between survey lines  (vii) Comparing overlapping data between platforms\n\n**Learning Outcomes:**\nIdentify and remove outliers and validate data cleaning and other decisions made in processing multi-beam data.  Interpret and resolve systematic errors detected during data processing  Perform time series analysis of data from multiple sensors to detect artefacts and other errors that may exist in a survey dataset.  Assess processed data for coverage and quality, and specify remedial surveys."
        },
        {
            "type": "I",
            "id": "H6.2c",
            "desc": "Spatial data quality control",
            "info": "**Content:**\n(i) A posteriori  and a priori total propagated uncertainty (horizontal and vertical) (ii) Primary and secondary survey sensors used for quality control (iii) Relative and absolute uncertainties\n\n**Learning Outcomes:**\nDifferentiate between relative and absolute uncertainties.  Estimate and compare uncertainties through the use of different spatial and temporal datasets.    Define procedures used to assess and accept or reject data."
        },
        {
            "type": "I",
            "id": "H6.2d",
            "desc": "Spatial data interpolation",
            "info": "**Content:**\n(i) 1D polynomial interpolation (ii) Interpolating splines, BSplines, multi-dimensional splines (iii) Spatial interpolation by inverse distance and Kriging (iv) Grids and TIN construction from spatial data (v) Contouring techniques\n\n**Learning Outcomes:**\nChoose an appropriate interpolation method and compute a surface from sparse survey measurements. (I)  Select appropriate spatial data processing methods to create digital terrain models or gridded surfaces and contouring.  (A)"
        },
        {
            "type": "I",
            "id": "H6.2e",
            "desc": "Spatial data representation",
            "info": "**Content:**\n(i) Point Clouds (ii) Surface models (iii) Raster and vector data (iv) Spatial resolution (v) Data resolution (vi) Horizontal scale and vertical exaggeration (vii) Volume computations (viii) Profiles\n\n**Learning Outcomes:**\nApply estimation procedures to survey measurements to represent data according to survey product requirements. (I)  Select optimal parameters for data representation. (A)"
        },
        {
            "type": "H",
            "desc": "H7: Management of Hydrographic Data"
        },
        {
            "type": "I",
            "id": "H7.1a",
            "desc": "Databases",
            "info": "**Content:**\n(i) Relational databases (ii) Spatial databases (iii) Databases to hold different types of feature and geographical information\n\n**Learning Outcomes:**\nExplain the concepts of relational and spatial databases.  Conceptualize, develop, and populate a spatial database to represent hydrographic survey elements and define relationships between those elements."
        },
        {
            "type": "I",
            "id": "H7.1b",
            "desc": "Marine GIS basics",
            "info": "**Content:**\n(i) Features and feature types of point, line and polygon with marine examples. (ii) Marine and coastal data bases (iii) Datums and projections (iv) Vertical datums (v) Survey metadata (vi) Base maps and images\n\n**Learning Outcomes:**\nIdentify the data types that might be used to represent features from the marine environment considering the attribute that might be associated with such features.  Create a GIS project using marine spatial data.     Perform spatial processing on marine data sets including datum and projection transformations."
        },
        {
            "type": "I",
            "id": "H7.2a",
            "desc": "MSDI",
            "info": "**Content:**\n(i) Basic concept of MSDI (ii) Importance and role of data standards (iii) The value and benefit of good metadata (iv) Data exchange and sharing\n\n**Learning Outcomes:**\nDescribe the role of hydrographic data in Marine Spatial Data Infrastructures."
        },
        {
            "type": "I",
            "id": "H7.2b",
            "desc": "Open access marine data",
            "info": "**Content:**\n(i) Open access databases including GEBCO (ii) Marine data portals (iii) Data reliability from web sources (iv) Crowd-sourced data\n\n**Learning Outcomes:**\nDistinguish between types and sources of data as a measure of reliability and utility."
        },
        {
            "type": "I",
            "id": "H7.3a",
            "desc": "Spatial data integration",
            "info": "**Content:**\n(i) Tools and method for integration and comparison of hybrid data sets (ii) Co-registration of hybrid data sets\n\n**Learning Outcomes:**\nIntegrate data from multiple sources and sensor types in the conduct of a multisensor survey."
        },
        {
            "type": "I",
            "id": "H7.3b",
            "desc": "Spatial data visualisation",
            "info": "**Content:**\n(i) Use of color schemes (ii) Shading and illumination (iii) Vertical exaggeration (iv) Standards\n\n**Learning Outcomes:**\nEvaluate and select the best visualization method to highlight features of interest and quality-control a hydrographic data set."
        },
        {
            "type": "I",
            "id": "H7.3c",
            "desc": "Deliverables",
            "info": "**Content:**\n(i) Products provided directly from source data such as sounding data files and metadata. (ii) Feature databases such as wrecks, rocks and obstructions (iii) Data required for sailing directions, light lists, radio aids to navigation, port guides and notices to mariners. (iv) Digital and paper products derived from source data for various survey types and usage such as GIS and CAD files and/or geo-referenced images. (v) Reports on quality control, procedures, results and conclusions detailing processes adopted within survey operations and data processing. (vi) Standards including:  \uf0b7 IHO S-100, and product standards such as S-102. \uf0b7 Standard Seabed Data Model (SSDM).\n\n**Learning Outcomes:**\nDescribe hydrographic deliverables and produce paper products as well as digital products in accordance with specifications and standards.  Prepare a report on a hydrographic survey."
        },
        {
            "type": "H",
            "desc": "H8: Legal Aspects"
        },
        {
            "type": "I",
            "id": "H8.1a",
            "desc": "Responsibilities of the hydrographic surveyor",
            "info": "**Content:**\n(i) Nautical charts. (ii) Notice to mariners. (iii) Survey notes and reports. (iv) Fundamentals of professional liability relating to surveying (v) Professional ethics relating to commercial and government projects (vi) Legal issues and liability associated with hydrographic equipment and products.\n\n**Learning Outcomes:**\nDetail the role and responsibilities of the hydrographic surveyor as required under industrial standards and national/international legislation/conventions. (B)  Identify the sources of ethical guidance and discuss ethical considerations when dealing in a professional capacity with client and contracts. (I)  Discuss the potential liability of the hydrographic surveyor in common hydrographic endeavors. (I)"
        },
        {
            "type": "I",
            "id": "H8.1b",
            "desc": "Contracts",
            "info": "**Content:**\n(i) Invitation to tender and survey work specifications (ii) Response to tender (iii) Contractual obligations and insurance (iv) Survey work and deliverables\n\n**Learning Outcomes:**\nDevelop the technical content of an invitation to tender.  Analyze the risk and develop the technical content of a response that would include details and cost of necessary resources.  Interpret contractual obligations in terms of survey planning, execution and deliverables."
        },
        {
            "type": "I",
            "id": "H8.2a",
            "desc": "Delimitations",
            "info": "**Content:**\n(i) Historical development of 1982 UNCLOS.  (ii) Base points. (iii) Low tide elevations. (iv) Baselines: normal (including bay closing lines); straight and archipelagic. (v) Internal waters. (vi) Territorial seas. (vii) Contiguous zones. (viii)  Exclusive Economic Zone (ix) Extended continental shelf. (x) High seas.\n\n**Learning Outcomes:**\nDefine the types of baselines under UNCLOS and how the territorial sea limit and other limits are projected from them, including the use of low tide elevations.  Plan and specify hydrographic surveys to be utilized in the delimitation of baselines and maritime boundaries.  Describe the legal operational constraints that apply within maritime zones."
        },
        {
            "type": "I",
            "id": "H8.2b",
            "desc": "Impact of surveys",
            "info": "**Content:**\n(i) Vessel speed restrictions and permanent and temporary threshold shifts (hearing) and harassment levels for marine mammals. (ii) Limitation of use of physical techniques such as bottom sampling and moorings in environmentally sensitive areas. (iii) Respect for cultural traditions in relation to use of the environment (iv) Marine protected areas\n\n**Learning Outcomes:**\nSpecify appropriate procedures and limitations for use of surveying equipment in compliance with environmental laws and marine protected area regulations."
        }
    ],
    "S5B": [
        {
            "type": "H",
            "desc": "B1: Mathematics, Statistics, Theory of Observations"
        },
        {
            "type": "I",
            "id": "B1.1",
            "desc": "Linear algebra",
            "info": "**Content:**\n(i) Vector and affine spaces, \nvector and inner products, \nnorms.\n(ii) Linear equations, \ndeterminants.\n(iii) Analytical geometry, line and \nplane equations.\n(iv) Linear operators, matrix \nrepresentation, composition, \ninverse, transpose.\n(v) Translations, rotations, \ncoordinate transformations.\n\n**Learning Outcomes:**\nDescribe and apply 2D transformations involved in surveying and mapping. (E4.1c) Solve linear equations using matrix methods."
        },
        {
            "type": "I",
            "id": "B1.2",
            "desc": "Differential calculus",
            "info": "**Content:**\ni) Real and vector valued functions. \n(ii) Gradient of real-valued functions and their discrete approximations. \n(iii) Series and integrals\n\n**Learning Outcomes:**\nCompute the gradient of a vector valued function. Define a function as a series. Calculate explicit integrals of classical functions"
        },
        {
            "type": "I",
            "id": "B1.3",
            "desc": "Trigonometry",
            "info": "**Content:**\n(i) Basic trigonometry (ii) Sphere, great circle, rhumb lines, sphere angles, spherical triangles and spherical excess\n\n**Learning Outcomes:**\nApply plane and spherical trigonometry to surveying problems."
        },
        {
            "type": "I",
            "id": "B1.4",
            "desc": "Statistics",
            "info": "**Content:**\n(i) Random variables, mean, variance, standard deviation (ii) Covariance and correlation (iii) Estimation of mean, variance, covariance (iv) Normal distribution\n\n**Learning Outcomes:**\nExplain what is meant by a random variable, estimate the mean, variance and standard deviation for a random variable and also the covariance between random variables."
        },
        {
            "type": "I",
            "id": "B1.5",
            "desc": "Theory of errors",
            "info": "**Content:**\n(i) Linear observation equations (ii) Covariance propagation law\n\n**Learning Outcomes:**\nApply the variance propagation law to a linear observation equation, and derive a measurement uncertainty as a function of observables\u2019 covariances."
        },
        {
            "type": "I",
            "id": "B1.6",
            "desc": "Least squares",
            "info": "**Content:**\n(i) Least squares procedure (ii) Covariance of estimated parameters (iii) Use of unit variance factor estimate Interpret results from a least square estimation applied to survey measurements. 8 (iv) Interpretation of ellipses of confidence\n\n**Learning Outcomes:**\nInterpret results from a least square estimation applied to survey measurements."
        },
        {
            "type": "I",
            "id": "B1.7",
            "desc": "Interpolation",
            "info": "**Content:**\ni) 1D polynomial interpolation (ii) Spatial interpolation by inverse distance weighting methods\n\n**Learning Outcomes:**\nDifferentiate between 1-D and spatial interpolation methods. Create and compare interpolated surfaces from one set of sparse survey measurements using appropriate software under different configurations."
        },
        {
            "type": "H",
            "desc": "B2: Information and Communication Technology"
        },
        {
            "type": "I",
            "id": "B2.1",
            "desc": "Computer systems",
            "info": "**Content:**\n(i) Central Processing Unit\n(ii) RAM, data storage\n(iii) Communication board, serial \nlinks, communication ports \nbuffers, Ethernet links, data \ntransmission rates\n(iv) Communication protocols\n(v) Clocks, clocks drift, time \ntagging and synchronization \nof data\n(vi) Operating systems \n(vii) Device drivers\n\n**Learning Outcomes:**\nDescribe the different components of a\nreal-time data acquisition system,\nincluding various modes of\ncommunication and time-tagging.\nDescribe the role of a device driver and its\nrelation to data exchange."
        },
        {
            "type": "I",
            "id": "B2.2",
            "desc": "Office work software suites",
            "info": "**Content:**\n(i) Word processors\n(ii) Spreadsheets \n(iii) Graphics and image processing \nsoftware\n(iv) Database management systems \nand query languages\n\n**Learning Outcomes:**\nUse classical office work software suites.\n\nConstruct a database, populate it and\nquery its content."
        },
        {
            "type": "I",
            "id": "B2.3",
            "desc": "Programming",
            "info": "**Content:**\n(i) Basic operations of a computer \nprogram or script\n(ii) Algorithms (loops, conditional \ninstructions)\n(iii) Scientific computation \nenvironments\n(iv) Application to data exchange, \nfile conversion\n\n**Learning Outcomes:**\n\"Write a program for data format\nconversion and/or basic algorithm\"\ncomputation."
        },
        {
            "type": "I",
            "id": "B2.4",
            "desc": "Web and network services",
            "info": "**Content:**\n(i) Networks (LANs)\n(ii) Internet \n(iii) Networks integrity\n(iv) Communication protocols\n\n**Learning Outcomes:**\nDescribe the different network\ncommunication protocols used in remote\ndata exchange applications."
        },
        {
            "type": "I",
            "id": "B2.5",
            "desc": "Databases",
            "info": "**Content:**\n(i) File types (binary, text, XML)\n(ii) Relational databases\n(iii) Geospatial databases\n\n**Learning Outcomes:**\nDescribe different types of geospatial data\nand their representation."
        },
        {
            "type": "H",
            "desc": "B3: Physics"
        },
        {
            "type": "I",
            "id": "B3.1",
            "desc": "Kinematics",
            "info": "**Content:**\n(i) Kinematics (angular and linear \nvelocities, accelerations)\n(ii) Coriolis Effect\n(iii) Newton\u2019s law, forces, \naccelerations, energy\n\n**Learning Outcomes:**\nDescribe the relationship between linear \nand rotational motions through \nacceleration and velocity"
        },
        {
            "type": "I",
            "id": "B3.2",
            "desc": "Gravity",
            "info": "**Content:**\ni) Gravity field of the earth (ii) Equipotential surfaces\n\n**Learning Outcomes:**\nDescribe the gravity field of the earth in \nterms of acceleration and potential"
        },
        {
            "type": "I",
            "id": "B3.3",
            "desc": "Magnetism"
        },
        {
            "type": "I",
            "id": "B3.4",
            "desc": "Waves",
            "info": "**Content:**\n(i) Electromagnetic waves\n(ii) Pressure waves\n(iii) Ocean waves\n(iv) Wave Propagation\n(v) Electromagnetic spectrum\n(vi) Radiation, emission and \nabsorption\n(vii) Reflection, refraction, \ndiffraction\n\n**Learning Outcomes:**\nDifferentiate between types of waves and \ntheir generation and propagation. \nExplain how medium parameters affect \nwave behavior"
        },
        {
            "type": "I",
            "id": "B3.5",
            "desc": "Electromagnetic waves"
        },
        {
            "type": "I",
            "id": "B3.6",
            "desc": "Geometrical optics"
        },
        {
            "type": "I",
            "id": "B3.7",
            "desc": "Lasers"
        },
        {
            "type": "I",
            "id": "B3.8",
            "desc": "Transducers and clocks"
        },
        {
            "type": "H",
            "desc": "B4: Earth Sciences"
        },
        {
            "type": "I",
            "id": "B4.1",
            "desc": "Geography and geology",
            "info": "**Content:**\n(i) Plate tectonics, earthquakes \nzones\n(ii) Different types of rocks\n(iii) Erosion and deposition\n(iv) Rivers and estuaries\n\n**Learning Outcomes:**\nDescribe the internal structure, the \nphysical characters and dynamics of the \nEarth referring to ocean basin structure, \nand the major processes affecting coastal \nmorphology"
        },
        {
            "type": "I",
            "id": "B4.2",
            "desc": "Substrates",
            "info": "**Content:**\ni) Sediment types\n(ii) Sedimentary cycles\n(iii) Siltation\n(iv) Submerged aquatic vegetation \n(v) Corals\n\n**Learning Outcomes:**\nDistinguish common seafloor \ncharacteristics. Describe the ocean bottom \nas a multilayered structure composed of \nsediment deposits"
        },
        {
            "type": "H",
            "desc": "B5: Nautical Science"
        },
        {
            "type": "I",
            "id": "B5.1",
            "desc": "Conventional aids to navigation",
            "info": "**Content:**\n(i) Types of buoys and beacons\n(ii) Radar beacons\n(iii) AIS systems\n\n**Learning Outcomes:**\nDescribe the principal fixed and floating \naids to navigation and the use of \nautomatic identification systems."
        },
        {
            "type": "I",
            "id": "B5.2",
            "desc": "GMDSS",
            "info": "**Content:**\n(i) Sea areas\n(ii) EPIRBs and SARSAT\n(iii) Digital selective calling\n(iv) NAVTEX\n(v) Inmarsat-C\n\n**Learning Outcomes:**\nDescribe the components and purpose of \nGMDSS."
        },
        {
            "type": "I",
            "id": "B5.3",
            "desc": "Nautical charts",
            "info": "**Content:**\n(i) Content, datum, projection, \nscale and types of nautical \ncharts\n(ii) Chart symbols\n(iii) Chart graticules\n(iv) Uncertainty indicators (e.g. \nsource diagram, reliability \ndiagram, zone of confidence, \nnotes)\n(v) Navigational hazards\n(vi) Plotting instruments\n\n**Learning Outcomes:**\nLayout a route on a nautical chart, plot \npositions, identifies navigational hazards \nand revise navigational plan as required. \nDescribe the content of a nautical chart \nand explain datum, projection, scale\nDescribe the uncertainty indicators \nassociated with nautical charts."
        },
        {
            "type": "I",
            "id": "B5.4",
            "desc": "Navigation publications",
            "info": "**Content:**\n(i) Sailing directions, \n(ii) Light and radio lists, \n(iii) Tides and current tables\n(iv) Notice to mariners\n\n**Learning Outcomes:**\nUse content of nautical publications in a \nsurvey planning context."
        },
        {
            "type": "I",
            "id": "B5.5",
            "desc": "Compasses",
            "info": "**Content:**\n(i) Earth magnetic field\n(ii) Magnetic compasses\n(iii) Gyros\n(iv) Compass error and corrections\n\n**Learning Outcomes:**\nDescribe the capabilities, limitations and \nerrors of magnetic and gyro compasses. \nDetermine and apply corrections for \nmagnetic and gyro compass error."
        },
        {
            "type": "I",
            "id": "B5.6",
            "desc": "Emergency procedures",
            "info": "**Content:**\n(i) Fire extinguishers \n(ii) Life preservers and cold water \nsurvival suits, life rafts\n(iii) Distress signals and EPIRB\n(iv) Procedures for man-overboard, \nfire, and abandoning ship\n\n**Learning Outcomes:**\nExplain the importance of the emergency \nequipment and procedures."
        },
        {
            "type": "I",
            "id": "B5.7",
            "desc": "Safe working practice",
            "info": "**Content:**\n(i) Water-tight doors and hatches\n(ii) Suspended loads\n(iii) Enclosed spaces\n(iv) Working aloft, with equipment \nover the side\n(v) Work permitting\n(vi) Securing equipment for sea\n(vii) Cables and antenna installation\n(viii)Earthing of electrical \nequipment\n(ix) High voltage electrical safety\n(x) Personal protective equipment\n\n**Learning Outcomes:**\nDescribe procedures for maintaining a \nsafe working environment.\nDraw a diagram to indicate safe cable \nroutes for survey instruments.\nDescribe methods for securing equipment \nfor heavy weather."
        },
        {
            "type": "I",
            "id": "B5.8",
            "desc": "Rope and wires",
            "info": "**Content:**\n(i) Types of wire and rope \n(ii) Characteristics (stretch, \nfloating, strength) of ropes.\n(iii) Basic knots\n\n**Learning Outcomes:**\nSelect and tie basic knots.\nSelect appropriate wire or rope."
        },
        {
            "type": "I",
            "id": "B5.9",
            "desc": "Towed and over the side instruments",
            "info": "**Content:**\ni) Rosette systems and \ninstruments\n(ii) ROVs, AUVs, towed systems, \ncatenary and layback\n(iii) A-frames, cable blocks, \nelectro-mechanical wire, slip \nrings and optical cabling\n(iv) Moonpools\n(v) Launch and recovery \n(vi) Station keeping and \nmaneuvering\n\n**Learning Outcomes:**\nDeploy and recover oceanographic and \nhydrographic equipment"
        },
        {
            "type": "I",
            "id": "B5.10",
            "desc": "Anchoring",
            "info": "**Content:**\ni) Shipboard ground tackle \nincluding anchor, chain, \nwindlass, stoppers\n(ii) Small boat anchoring\n(iii) Multiple anchors\n\n**Learning Outcomes:**\nDescribe ship and small boats anchoring \nand ground tackle. \nExplain how the final position of the \nvessel can be adjusted through the use of\nanchors"
        },
        {
            "type": "I",
            "id": "B5.11",
            "desc": "Instrument moorings",
            "info": "**Content:**\ni) Launch and recovery\n(ii) Anchors and acoustic releases\n(iii) Scope, wire, flotation, tension\n(iv) Weights\n\n**Learning Outcomes:**\nPrepare, deploy and recover seabed \ninstruments."
        },
        {
            "type": "H",
            "desc": "B6: Meteorology"
        },
        {
            "type": "I",
            "id": "B6.1",
            "desc": "Weather fundamentals and observations",
            "info": "**Content:**\n(i) Vertical structure and the \nvariability of the atmosphere(ii) Temperature, humidity, dew_x0002_point, frost-point\n(iii) Atmospheric pressure, winds\n(iv) Clouds and precipitations\n(v) Rain, snow\n(vi) Visibility, advection fog and \nradiation fog\n(vii) Pressure systems\n(viii)Geostrophic winds, anabatic \nand katabatic winds\n(ix) Instruments and sensors used \nto register temperatures, \npressure, direction and \nintensity of wind\n\n**Learning Outcomes:**\nDefine physical meteorological \nparameters  Operate instruments and sensors used to \nregister temperature, pressure, direction \nand intensity of wind. Record these \nparameters according to internationally \naccepted standards.\nIdentify characteristics of weather by \nsimple observation of the sea and the sky"
        },
        {
            "type": "I",
            "id": "B6.2",
            "desc": "Wind, waves and seas",
            "info": "**Learning Outcomes:**\nExplain the relation between atmospheric pressure, temperature and wind. Describe wind circulation around pressure systems and the effect of friction"
        },
        {
            "type": "I",
            "id": "B6.3",
            "desc": "Weather forecasting",
            "info": "**Content:**\n(i) Synoptic charts\n(ii) Weather forecast\n\n**Learning Outcomes:**\nInterpret a synoptic chart. Produce an \noperational short range forecast based on \nmeteorological information, weather \nbulletins and facsimile charts"
        },
        {
            "type": "H",
            "desc": "E1: Underwater Acoustics"
        },
        {
            "type": "I",
            "id": "E1.1a",
            "desc": "Generation of acoustic waves",
            "info": "**Content:**\n(i) Plane and spherical waves in \nterms of wavelength, \namplitude and frequency.\n(ii) Speed of sound in relation to \nwater properties and profile in \nthe water column.\n(iii) Acoustic units, intensities and \nsound levels\n(iv) Active Sonar Equation \nincluding sound source, causes \nof propagation loss in relation \nto water properties together \nwith characteristics of the sea \nfloor and targets, noise level \nand directivity\n(v) Refraction and the path of \nsound rays through the water \ncolumn.\n(vi) Transducer principles and \nbeam characteristics\n(vii) System parameters including \nbandwidth, pulse length, pulse \nrepetition rate, gain, detection\nthreshold, range resolution and \nspatial resolution.\n\n**Learning Outcomes:**\nExplain how transducer parameters \nimpact upon beam characteristics."
        },
        {
            "type": "I",
            "id": "E1.1b",
            "desc": "Propagation of acoustic waves",
            "info": "**Learning Outcomes:**\nUsing appropriate units, describe acoustic \nwave behavior with reference to physical \nproperties of the water column.\nCreate a sound speed profiles from water \ncolumn measurements and describe its \neffect on the acoustic ray path."
        },
        {
            "type": "I",
            "id": "E1.1c",
            "desc": "Reflection, scattering and system performance",
            "info": "**Learning Outcomes:**\nDetail sources of noise and the impact of noise on operation of acoustic systems."
        },
        {
            "type": "I",
            "id": "E1.1d",
            "desc": "Reception of acoustic waves",
            "info": "**Learning Outcomes:**\nExplain how a system is optimized in terms of environmental factors for measurement and target detection."
        },
        {
            "type": "I",
            "id": "E1.2a",
            "desc": "Single beam echo sounders",
            "info": "**Content:**\n(i) Split beam and dual beam echo \nsounders\n(ii) Components of a single beam \necho sounder.\n(iii) Operation of single beam echo \nsounders.\n(iv) Bottom detection principles. \n(v) Full-echo-envelope returns\n(vi) Sub-bottom profiling systems.\n(vii) Validation & Calibration.\n(viii)Principles, components, \ngeometry and deployment of \nside scan sonar systems.\n(ix) Side scan sonar backscatter \nand sea floor reflection.\n(x) Side scan images and sources \nof distortion.\n(xi) Combining sources of \nuncertainty\n\n**Learning Outcomes:**\nSet up, deploy and operate a single beam \necho sounder.\nSelect appropriate range, scale, frequency \nand pulse repetition rate for specific \napplications in relation to spatial \nresolution, bottom penetration and depth \nof water."
        },
        {
            "type": "I",
            "id": "E1.2b",
            "desc": "Single beam echo sounder data recording",
            "info": "**Learning Outcomes:**\nInterpret echo sounder returns through \ndifferentiation between return signals."
        },
        {
            "type": "I",
            "id": "E1.2c",
            "desc": "Range uncertainty",
            "info": "**Learning Outcomes:**\nDetail and quantify components \ncontributing to uncertainty in derived \nranges"
        },
        {
            "type": "I",
            "id": "E1.2d",
            "desc": "Side scan sonar",
            "info": "**Learning Outcomes:**\nSet up, deploy and operate side scan \nsonar. \nInterpret side scan sonar records \nconsidering target characteristics, system \nconfiguration, potential sources of noise \nand distortion."
        },
        {
            "type": "I",
            "id": "E1.3a",
            "desc": "Beam characteristics",
            "info": "**Content:**\n(i) Transducer elements and \narrays. \n(ii) Beam forming and beam \nsteering\n(iii) Principles and geometry of \nmulti-beam and \ninterferometric (phase \nmeasurement) sonar systems \n(iv) Amplitude and phase bottom \ndetection\n(v) Variations in beam spacing \nand footprint size\n(vi) Backscatter and seabed \nclassification\n(vii) Hull and pole mounting of \ntransducers considering \nplatform motion. Integration of \ncomponents including time \nstamping, attitude \ncompensation, sensor offsets \nand networking.\n(viii)Surface and water column \nsound speed monitoring\n(ix) Gain, power, pulse length\n(x) Quality control procedures\n\n**Learning Outcomes:**\nDefine characteristics of beams in relation \nto transducer settings.\nCompare phase and interferometric \nsystems with multi-beam systems"
        },
        {
            "type": "I",
            "id": "E1.3b",
            "desc": "Backscatter and water column returns",
            "info": "**Learning Outcomes:**\nDescribe characteristics of returns in the \ncontext of seabed type, angle of incidence \nand scatter from within the water column"
        },
        {
            "type": "I",
            "id": "E1.3c",
            "desc": "Bottom spatial coverage",
            "info": "**Learning Outcomes:**\nDetermine sounding density and object \ndetection capability as functions of system \nparameters"
        },
        {
            "type": "I",
            "id": "E1.3d",
            "desc": "Installation and configuration",
            "info": "**Learning Outcomes:**\nDescribe suitable mounting structure and location for transducers given operational constraints"
        },
        {
            "type": "I",
            "id": "E1.3e",
            "desc": "Range and angle uncertainty",
            "info": "**Learning Outcomes:**\nDifferentiate between error sources in \nphase and amplitude detection modes.\nIdentify sources of range and angle \nuncertainty depending on acoustic \nparameter configuration"
        },
        {
            "type": "I",
            "id": "E1.3f",
            "desc": "Operation",
            "info": "**Learning Outcomes:**\nSet up, deploy and operate a swath sonar \nsystem.\nIdentify problems or artefacts in on-line \ndata due to inappropriate configuration or \nchanging environmental parameters. \nTune acoustic parameters for optimum \nperformance.\nApply quality control procedures to data \nacquisition and on-line processing"
        },
        {
            "type": "H",
            "desc": "E2: Remote Sensing"
        },
        {
            "type": "I",
            "id": "E2.1a",
            "desc": "Airborne LiDAR systems",
            "info": "**Content:**\n(i) Wavelength, water penetration \nand ground detection\n(ii) Scanning frequency and \npattern in relation to power, \ncoverage and spatial density.\n(iii) Influence of sea surface \nroughness, water column \nturbidity on the beam pattern \nand penetration.\n(iv) Sea bed optical characteristics \nand bottom detection.\n(v) Secchi disc and Secchi depth\n(vi) Optical characteristics of \ncoastal terrain.\n(vii) Influence of geometry and \nwaveform on feature detection.\n(viii)Integration of components \nincluding time stamping, \nattitude compensation, sensor \noffsets and networking.\n(ix) Combined bathymetric and \ntopographic LiDAR systems\n\n**Learning Outcomes:**\nExplain the principles, capabilities and \nlimitations of topographic and \nbathymetric LiDAR.\nDescribe the physical environment and \noperational situations in which \n bathymetric LiDAR surveys are \ncomplementary to echo sounder surveys"
        },
        {
            "type": "I",
            "id": "E2.1b",
            "desc": "Airborne LiDAR data products",
            "info": "**Learning Outcomes:**\nExtract high and low water lines from \nbathymetric and topographic LiDAR data \nsets.\nUse topographic and bathymetric LiDAR \ndata to complement other spatial data."
        },
        {
            "type": "I",
            "id": "E2.1c",
            "desc": "Terrestrial LiDAR",
            "info": "**Learning Outcomes:**\nUse terrestrial LiDAR data to complement \nother coastal spatial data."
        },
        {
            "type": "I",
            "id": "E2.2a",
            "desc": "Remotely sensed bathymetry",
            "info": "**Content:**\n(i) Multispectral imagery and \nwater penetration in relation to \nwavelength\n(ii) Satellite Derived Bathymetry \n(SDB) \n(iii) Spatial resolution and accuracy \navailable.\n\n**Learning Outcomes:**\nDemonstrate awareness of techniques and \ndata sources in remotely sensed \nbathymetric data and the spatial \nparameters associated with such data."
        },
        {
            "type": "I",
            "id": "E2.2b",
            "desc": "Shoreline deliniation",
            "info": "**Content:**\n(i) Multispectral imagery, \nreflectance in relation to \nwavelength and terrain \ncharacteristics.\n(ii) Geometrical properties of \nsatellite images and aerial \nphotographs\n\n**Learning Outcomes:**\nDescribe geometrical properties of images \nand use them to create a shoreline map \nfrom images and aerial photographs."
        },
        {
            "type": "H",
            "desc": "E3: Water Levels and Flow"
        },
        {
            "type": "I",
            "id": "E3.1a",
            "desc": "Tidal fundamentals",
            "info": "**Content:**\n(i) Tide generating forces, the \nequilibrium and real tides. \n(ii) Major harmonic constituents \nand different types of tide. \n(iii) Amphidromic points and co_x0002_tidal charts.\n(iv) Geomorphological influences \non tidal characteristics\n\n**Learning Outcomes:**\nExplain tidal characteristics in terms of \ntide raising forces and local and regional \nmorphological features."
        },
        {
            "type": "I",
            "id": "E3.1b",
            "desc": "Tidal information",
            "info": "**Content:**\n(i) Tide and current tables\n(ii) Tide prediction tools\n\n**Learning Outcomes:**\nUse tide tables and appropriate software \nto determine predicted water levels and \ntidal currents."
        },
        {
            "type": "I",
            "id": "E3.1c",
            "desc": "Non-tidal water level variations",
            "info": "**Content:**\n(i) Changes in water level caused \nby: atmospheric pressure, \nwind, seiches, ocean \ntemperature and precipitation.\n(ii) Water level variations in \nestuaries, wetlands and rivers\n(iii) Water level variations \noccurring in inland lakes, \nrivers, reservoirs and canals\n\n**Learning Outcomes:**\nDescribe the effect of non-tidal influences \non tidal water levels in the conduct of a \nhydrographic survey\nDescribe sources of water level variations \noccurring in inland waters"
        },
        {
            "type": "I",
            "id": "E3.2a",
            "desc": "Water level gauges",
            "info": "**Content:**\n(i) Operating principles of various \ntypes of water level gauges \nincluding pressure (vented and \nunvented), GNSS buoys, float, \nradar, acoustic sensors and tide \npoles/boards/staffs.\n(ii) Installing water level gauges, \nestablishment and levelling of \nassociated survey marks\n(iii) Networks of water level \ngauges\n(iv) Reference levels such as MSL, \nchart datum, and mean high \nwater.\n(v) River and lake datums\n(vi) Uncertainties associated with \nmeasurement devices\n(vii) Uncertainties associated with \nduration of observations.\n(viii)Uncertainties associated with \nspatial separation of water \nlevel measurements.\n\n**Learning Outcomes:**\nExplain the principles of operation of \ndifferent types of water level gauges.\nInstall, level and calibrate a water level \ngauge"
        },
        {
            "type": "I",
            "id": "E3.2b",
            "desc": "Tidal measurement",
            "info": "**Learning Outcomes:**\nConfigure water level gauges for logging \ndata, data communication, data download \nand for network operation with \nappropriate quality control measures."
        },
        {
            "type": "I",
            "id": "E3.2c",
            "desc": "Water level datums",
            "info": "**Learning Outcomes:**\nDefine various tidally based reference \nlevels on the basis of tide time series and \nexplain how these values are computed.\nDescribe how vertical reference levels in \nrivers and lakes are defined, and \ndetermined in practice."
        },
        {
            "type": "I",
            "id": "E3.2d",
            "desc": "Uncertainty in water level",
            "info": "**Learning Outcomes:**\nRelate uncertainty in water levels to \nuncertainties in measurement, duration \nand distance from water level gauge"
        },
        {
            "type": "I",
            "id": "E3.3a",
            "desc": "Water level reduction of soundings",
            "info": "**Content:**\n(i) Vessel draft, squat\n(ii) Lever-arms and Position \nReference Point offsets\n(iii) Vertical datums for sounding \nreduction\n(iv) Predicted tides versus \nmeasured tide reduction\n(v) Co-tidal charts\n(vi) Reduction of survey data to a \ndatum using GNSS \nobservations \n(vii) Reduction of survey data using \nwater level observations\n\n**Learning Outcomes:**\nUse tidal information, and vessel \nparameters to reduce soundings to a \nspecified datum."
        },
        {
            "type": "I",
            "id": "E3.3b",
            "desc": "Reduction of soundings using GNSS observations",
            "info": "**Learning Outcomes:**\nConfigure and calibrate GNSS to reduce soundings to a specified survey datum."
        },
        {
            "type": "I",
            "id": "E3.4a",
            "desc": "Tidal streams and currents",
            "info": "**Content:**\n(i) The relationship between \ncurrents and tides \n(ii) Rectilinear and rotary tidal \nstreams \n(iii) Methods for measuring tidal \nstreams and currents, including \ncurrent meters, acoustic \ncurrent profilers (ADCP) and \ndrogues.\n(iv) Current surveys \n(v) Surface current radar \nobservation\n(vi) Portraying current data\n\n**Learning Outcomes:**\nExplain the forces behind currents and \nchange in currents with tides."
        },
        {
            "type": "I",
            "id": "E3.4b",
            "desc": "Current measurement and portrayal",
            "info": "**Learning Outcomes:**\nDescribe techniques for current \nmeasurement and identify appropriate \nmethods for acquiring and displaying \ncurrent data."
        },
        {
            "type": "H",
            "desc": "E4: Positioning"
        },
        {
            "type": "I",
            "id": "E4.1a",
            "desc": "Introduction to geodesy",
            "info": "**Content:**\n(i) Shape of the Earth as a sphere, \nellipsoid of revolution and the \ngeoid; \n(ii) Definitions of astronomical \nterms and time.\n(iii) Geodetic computations on the \nellipsoid.\n(iv) Local geodetic reference \nframes\n(v) Vertical datums\n(vi) Terrestrial reference systems \nand reference frames.\n(vii) Modern geodetic datums \nWGS84, GRS80. \n(viii)Datums and datum \ntransformation techniques\n\n**Learning Outcomes:**\nDescribe the shape of the Earth in terms \nof potential and ellipsoidal models"
        },
        {
            "type": "I",
            "id": "E4.1b",
            "desc": "Coordinate systems, frames and datums",
            "info": "**Learning Outcomes:**\nDescribe modern geodetic reference \nsystems and associated reference frames."
        },
        {
            "type": "I",
            "id": "E4.1c",
            "desc": "Geodetic transformations and associated computations",
            "info": "**Learning Outcomes:**\nDescribe horizontal and vertical datum \ntransformation concepts"
        },
        {
            "type": "I",
            "id": "E4.1d",
            "desc": "Ellipsoidal computations",
            "info": "**Learning Outcomes:**\nDescribe geometry of lines on the \nellipsoid and perform forward and inverse \ncomputations on the ellipsoidal surface \nusing available software."
        },
        {
            "type": "I",
            "id": "E4.2",
            "desc": "Map projections",
            "info": "**Content:**\n(i) Geometrical properties of map \nprojections\n(ii) Cylindrical, conical \nprojections including the UTM \nsystem and stereographic\n(iii) Analytical projection formulae \nand planimetric coordinates\n(iv) Distortions in distance and \ndirection associated with \ndifferent map projections\n\n**Learning Outcomes:**\nDescribe the properties and distortions in \ndifferent types of projections used in maps \nand charts.\nExplain the selection of projection type \nand apply appropriate projection \nformulae."
        },
        {
            "type": "I",
            "id": "E4.3a",
            "desc": "Positioning fundamentals",
            "info": "**Content:**\n(i) Principles of distance \nmeasurement and angle \nmeasurement\n(ii) Principles of 2D adjustment\n(iii) Sextant\n(iv) Total station\n(v) Theodolite\n(vi) Electromagnetic positioning \ndevices\n(vii) Intersection, Resection, Polar \nand Traverse(viii)Astronomic methods for \ndetermination of orientation.\n(ix) Expansion of traditional \ngeodetic networks\n(x) Principle of GNSS positioning\n(xi) GNSS services characteristics \n(single baseline, network, \nPrecise Point Positioning)\n(xii) Performance of code vs. \ncarrier; differential vs. \nautonomous modes; multiple \nvs. single frequency; fixed vs. \nfloat ambiguity resolution\n(xiii)Atmosphere (troposphere, \nionosphere) effects on GNSS \nsignals\n(xiv)Control stations\n(xv) Logistical aspects of providing \ncontro\n\n**Learning Outcomes:**\nUndertake control surveys, establish, \nmark and describe control stations, \ndescribe horizontal positioning \nprocedures, apply appropriate methods \nand use corresponding instruments for \npositioning.\nCorrect gyros using astronomic methods"
        },
        {
            "type": "I",
            "id": "E4.3b",
            "desc": "Satellite positioning",
            "info": "**Learning Outcomes:**\nExplain the GNSS concept and principles. \nDefine pseudo ranging and carrier phase \nbased modes of satellite positioning \nDifferentiate between base station and permanent networks, real-time and post_x0002_processing."
        },
        {
            "type": "I",
            "id": "E4.3c",
            "desc": "Positioning systems",
            "info": "**Learning Outcomes:**\nField test and use distance and angle \nmeasurement instruments. Apply field \nvalidation procedures\nOperate GNSS and DGNSS equipment, \nassess accuracy and precision, post_x0002_process GNSS data using appropriate \nsoftware."
        },
        {
            "type": "I",
            "id": "E4.3d",
            "desc": "Historical surveys",
            "info": "**Learning Outcomes:**\nRelate historical surveys to legacy \npositioning systems"
        },
        {
            "type": "I",
            "id": "E4.3e",
            "desc": "Survey control",
            "info": "**Learning Outcomes:**\nEstablish, mark, and describe control \nstations, particularly hydrographic \nstations."
        },
        {
            "type": "I",
            "id": "E4.4a",
            "desc": "Height systems",
            "info": "**Content:**\ni) Height systems (dynamic, \northometric and normal)\n(ii) Leveling instruments\n(iii) Total stations\n(iv) Effects of curvature and \nrefraction\n(v) GNSS observations\n\n**Learning Outcomes:**\nDifferentiate between gravity-related and \nellipsoidal heights"
        },
        {
            "type": "I",
            "id": "E4.4b",
            "desc": "Elevation measurements and computation",
            "info": "**Learning Outcomes:**\nDescribe methods for determining \nelevation differences.\nDetermine height using GNSS equipment.\nCompute elevations and leveling networks \nfrom observed leveling data. \nUse observation techniques for correction \nof curvature and refraction"
        },
        {
            "type": "I",
            "id": "E4.5a",
            "desc": "Acoustic positioning concepts",
            "info": "**Content:**\ni) Long baseline\n(ii) Short baseline\n(iii) Ultra-short baseline\n(iv) Transponders\n(v) Depth sensors\n(vi) Integration with INS and \nvelocity sensors\n(vii) Use of acoustics for \npositioning towed vehicles, \nROVs and AUVs\n\n**Learning Outcomes:**\nDescribe the deployment, calibration, \nsignal structure and performance of \nacoustic positioning devices. \nDescribe the use of acoustic positioning \nsystems in offshore survey operations."
        },
        {
            "type": "I",
            "id": "E4.5b",
            "desc": "Acoustic positioning systems",
            "info": "**Learning Outcomes:**\nDescribe the principles of integrated \nsubsea positioning systems and their \napplication to remote survey platforms"
        },
        {
            "type": "I",
            "id": "E4.6a",
            "desc": "Inertial Measurement Units",
            "info": "**Content:**\ni) Gyros and accelerometers\n(ii) IMU \n(iii) Procedures for INS static and \ndynamic alignment \n(iv) Use of IMU in heave \nestimation\n(v) Aided Inertial navigation:\n\uf0b7 ADCP/INS \n\uf0b7 GNSS/INS\uf0b7 USBL/Depth/INS\n\n**Learning Outcomes:**\nDescribe principles and use of IMU\u2019s \nincluding north finding and heave \nestimation. \nCompare IMU heading measurements \nwith magnetic and gyro compasses."
        },
        {
            "type": "I",
            "id": "E4.6b",
            "desc": "Inertial Navigation Systems",
            "info": "**Learning Outcomes:**\nDistinguish IMUs and INS, and describe \ndynamic alignment of INS.\nExplain the concepts of aided inertial \nnavigation system."
        },
        {
            "type": "I",
            "id": "E4.7",
            "desc": "Sources of uncertainty",
            "info": "**Content:**\ni) Static surveys:\n\uf0b7 GNSS observations\n\uf0b7 Total stations\n\uf0b7 Leveling instruments\n\uf0b7 Acoustic positioning\n(ii) Mobile surveys:\n\uf0b7 GNSS equipment\n\uf0b7 IMU/INS\n\uf0b7 Acoustic positioning \n(iii) Total propagated uncertainty\n\n**Learning Outcomes:**\nDescribe and explain the sources and \nmagnitude of uncertainties associated with \neach positioning method and positioning \nsystem.\nMonitor, review and assess the \nperformance of each positioning system to \nbe used including repeatability, precision \nand accuracies of relative and absolute \npositions using appropriate statistical \ntools"
        },
        {
            "type": "H",
            "desc": "E5: Hydrographic Practice"
        },
        {
            "type": "I",
            "id": "E5.1a",
            "desc": "Hydrographic survey purposes",
            "info": "**Content:**\n(i) IHO S-44 and other survey \nquality standards.\n(ii) Hydrographic instructions and \ntenders\n(iii) Types of surveys, such as:\n\uf0b7 Nautical charting survey\n\uf0b7 Boundary delimitation \nsurvey\n\uf0b7 Ports, Harbor and \nwaterways surveys\n\uf0b7 Engineering works and \ndredging surveys\n\uf0b7 Coastal engineering \nsurveys\n\uf0b7 Inland surveys\n\uf0b7 Erosion and land-sea \ninterface monitoring\n\uf0b7 Environmental impact \nassessment\n\uf0b7 Deep sea and ROVs \n/AUVs surveys\n\uf0b7 Seismic and geomagnetic \nsurveys\n\uf0b7 Pipeline route, pipeline \ninstallation and cable \nlaying surveys\n\n**Learning Outcomes:**\nCompare, interpret and apply \nhydrographic instructions and tenders \nassociated with survey specifications"
        },
        {
            "type": "I",
            "id": "E5.1b",
            "desc": "Hydrographic survey execution requirements",
            "info": "**Learning Outcomes:**\nIdentify the different phases and \nterminology associated with types of \nsurvey operations."
        },
        {
            "type": "I",
            "id": "E5.1c",
            "desc": "Hydrographic survey project organization",
            "info": "**Learning Outcomes:**\nDistinguish the roles and responsibilities \nof individuals within a survey team."
        },
        {
            "type": "I",
            "id": "E5.2a",
            "desc": "Operational survey data transfer",
            "info": "**Content:**\n(i) Remote water level \nmeasurement,\n(ii) Shore based stations in support \nof positioning systems \n(iii) Use of remote survey \nplatforms and real time communication of data \nacquired.\n(iv) Data telemetry links including \nradio, satellite, telephonic and \nunderwater communications.\n(v) Compatibility between \nequipment and \ncommunications devices.\n\n**Learning Outcomes:**\nDescribe data telemetry in support of on \nboard survey data including applications \nand methods.\nImplement a data telemetry link between a \nsurvey infrastructure component and a \nsurvey system for real-time use."
        },
        {
            "type": "I",
            "id": "E5.2b",
            "desc": "Survey systems",
            "info": "**Content:**\n(i) Installation and calibration \nrequirements for:\n\uf0b7 Echo sounders\n\uf0b7 Swath systems\n\uf0b7 Side scan sonar\n\uf0b7 Surface and sub-surface \npositioning system\n\uf0b7 IMU/INS\n(ii) Sound velocity probes and \nprofilers\n(iii) Data acquisition and \nintegration systems\n(iv) Bar check\n(v) Boresight calibration for \nalignment bias\n(vi) Layback calculations\n\n**Learning Outcomes:**\nExplain the importance of the correct \ninstallation, calibration and determination \nof the attitude and position of each sensor"
        },
        {
            "type": "I",
            "id": "E5.2c",
            "desc": "Calibration and corrections",
            "info": "**Learning Outcomes:**\nSetup, integrate and test survey system \nincluding sensors, acquisition system \ntime-stamping strategy with appropriate \nphysical offset determination.\nExplain the purposes and apply speed of \nsound measurements in acoustic systems"
        },
        {
            "type": "I",
            "id": "E5.2d",
            "desc": "Line planning",
            "info": "**Content:**\n(i) Planning for data acquisition \nincluding line spacing and \nsample locations in alignment \nwith tasks to be performed on \nsurveys and equipment to be \nused.\n(ii) Planning of survey operation \nconsidering currents, tides and \nsurvey speed.\n(iii) Track guidance and route \nfollowing information systems.\n\n**Learning Outcomes:**\nPlan survey vessel survey lines as well as \ntowed, remote vehicle and autonomous \nvehicle lines in space and time."
        },
        {
            "type": "I",
            "id": "E5.2e",
            "desc": "Line keeping",
            "info": "**Learning Outcomes:**\nExplain the methods of maintaining a \nsurvey vessel or survey system on a \nplanned survey line or route. Describe the \neffects on the survey quality due to the \nvessel motion (speed over the ground, \nangular velocity)."
        },
        {
            "type": "I",
            "id": "E5.2f",
            "desc": "Survey operations",
            "info": "**Content:**\n(i) Survey parameters including: \n\uf0b7 scale, \n\uf0b7 positional accuracy and \nprecision,\n\uf0b7 survey speed, \n\uf0b7 line orientation,\n\uf0b7 environmental and \noceanographic parameters\n\uf0b7 survey lines, interlines and \ncross lines, \n\uf0b7 sounding density and \nspatial resolution\n\uf0b7 overlap\n\uf0b7 data coverage.\n(ii) Quality control of:\n\uf0b7 Horizontal position\n\uf0b7 Vertical position (heave, \nsquat, water level)\n\uf0b7 Coverage and overlap\n\uf0b7 Swath system data\n\uf0b7 Sound speed\n\n**Learning Outcomes:**\nDescribe the roles and the relationships of \nthe following survey parameters: scale, \npositional accuracy, survey speed, line \norientation, survey lines, interlines, cross \nlines, fix interval, data coverage."
        },
        {
            "type": "I",
            "id": "E5.2g",
            "desc": "Quality control",
            "info": "**Learning Outcomes:**\nExplain methods for quality control of \nsurvey data and the quality assurance of \nsurvey operations."
        },
        {
            "type": "I",
            "id": "E5.3",
            "desc": "Documentation",
            "info": "**Content:**\n(i) Production of reports \nassociated with the survey to \ninclude items such as:\n\uf0b7 Coverage including special \ninvestigation areas\n\uf0b7 Features such as rocks, \nwrecks, obstructions, \nwellheads and pipelines \n(least depth, extent and \nposition)\n\uf0b7 Track charts\n\uf0b7 Geodetic control on \nfeatures such as shoreline \nand navigation aids\n(ii) Metadata to include data types \nof data obtained together with \nassociated quality measures \nsuch as positional, thematic \nand temporal uncertainty as \nwell as lineage.\n(iii) Maintaining survey notes on \nevent by event findings during \ndata acquisition.\n(iv) Quality control procedures \nimplemented and calibration \nreports produced\n(v) Compliance with survey \nspecifications and standards.\n\n**Learning Outcomes:**\nCreate and compare different documents \nassociated with survey procedures in \nalignment with requirements using files, \ncharts and reporting tools.\nDescribe the sources and means by which \nmetadata files are created and populated."
        },
        {
            "type": "I",
            "id": "E5.4a",
            "desc": "Liability of the hydrographic surveyor",
            "info": "**Content:**\n(i) Nautical charts.\n(ii) Notice to mariners.\n(iii) Survey reports.\n(iv) Fundamentals of professional \nliability relating to surveying\n\n**Learning Outcomes:**\nDetail the role and responsibilities of the \nhydrographic surveyor as required under \nprofessional ethics, industry standards and \nnational/international \nlegislation/conventions.\nExplain the potential liability of the \nhydrographic surveyor"
        },
        {
            "type": "I",
            "id": "E5.4b",
            "desc": "Delimitations",
            "info": "**Content:**\n(i) Historical development of \n1982 UNCLOS Baselines \u2013\nnormal (including closing \nlines); straight and \narchipelagic\n(ii) Base points\n(iii) Baselines\n(iv) Internal waters.\n(v) Territorial seas\n(vi) Contiguous zones.\n(vii) Exclusive Economic Zone\n(viii)Extended continental shelf.\n(ix) High seas\n\n**Learning Outcomes:**\nDescribe the types of baselines under \nUNCLOS and how the territorial sea limit \nis projected from them, including the use \nof low tide elevations"
        },
        {
            "type": "H",
            "desc": "E6: Hydrographic Data Management"
        },
        {
            "type": "I",
            "id": "E6.1a",
            "desc": "Hydrographic data acquisition",
            "info": "**Content:**\n(i) Integration and logging of data \nfrom various sensors in \naccordance with survey \nspecifications to include \nequipment such as:\n\uf0b7 Echo sounder (SBES, \nMBES)\n\uf0b7 LiDAR\n\uf0b7 Sound velocity profiler, \nsurface velocity probe\n\uf0b7 Side-scan sonar\n\uf0b7 Surface positioning system\n\uf0b7 IMU / INS\n\uf0b7 Subsea positioning system \n(USBL)\n\uf0b7 ROV / AUV / ASV\n(ii) Data acquisition system and \nsoftware\n(iii) Time-tagging\n(iv) Data visualization\n\n**Learning Outcomes:**\nConfigure the data collection and \nrecording software for sensors and select \nsampling rates, gating and filtering \nsettings. \nDescribe the process of on-line data \nvalidation and selection."
        },
        {
            "type": "I",
            "id": "E6.1b",
            "desc": "Real-time data monitoring",
            "info": "**Learning Outcomes:**\nDemonstrate that the data meets survey \nrequirements through on-line monitoring \nof display and visualization tools. \nUse monitoring software to detect \npossible biases and errors in the data"
        },
        {
            "type": "I",
            "id": "E6.1c",
            "desc": "Survey data storage and transfer",
            "info": "**Content:**\ni) Content of files in different \nformats used to record data in \nsurvey planning, data \nacquisition and products.\n(ii) Organization of survey \ndatabases\n(iii) Data storage and backup \nsystems\n\n**Learning Outcomes:**\nCreate the required data types that will be \npart of standard exchange formats.\nConfigure systems for secure storage, \ntransfer and backup of survey data"
        },
        {
            "type": "I",
            "id": "E6.2a",
            "desc": "Spatial data cleaning",
            "info": "**Content:**\n(i) Data cleaning techniques \n(manual and automated)\n(ii) Identification of outliers\n(iii) Identification of real features\n\n**Learning Outcomes:**\n(i) Data cleaning techniques \n(manual and automated)\n(ii) Identification of outliers\n(iii) Identification of real features"
        },
        {
            "type": "I",
            "id": "E6.2b",
            "desc": "Spatial data quality control",
            "info": "**Content:**\n(i) Total propagated uncertainty -\nhorizontal\n(ii) Total propagated uncertainty -\nvertical\n(iii) Comparing crossing or \nadjacent data between survey \nlines \n(iv) Comparing overlapping data \nbetween survey platforms\n(v) Identification of systematic \nerrors\n\n**Learning Outcomes:**\nAssess the total propagated uncertainty of \nsurvey data relative to the survey \nspecification\nApply procedures used to assess, accept \nand reject data."
        },
        {
            "type": "I",
            "id": "E6.2c",
            "desc": "Spatial data representation",
            "info": "**Content:**\n(i) Data interpolation techniques\n(ii) Grids and TINs\n(iii) Contouring\n(iv) Volume computations\n\n**Learning Outcomes:**\nApply spatial data processing methods to \ncreate digital terrain models or gridded \nsurfaces and contouring.\nApply estimation procedures to survey \nmeasurements and volume computations."
        },
        {
            "type": "I",
            "id": "E6.3a",
            "desc": "Databases",
            "info": "**Content:**\ni) Raster and vector data models \nand commonly used file types\n(ii) Spatial Data Infrastructures \nincluding GIS\n(iii) Databases to hold different \ntypes of feature and \ngeographical information\n\n**Learning Outcomes:**\nExplain the concepts of raster and vector \ndata models. \nDescribe the concepts of Spatial Data \nInfrastructures (SDI). \nUse file types that support the exchange \nof hydrographic data to transfer data \nbetween acquisition, database and GIS \nenvironments."
        },
        {
            "type": "I",
            "id": "E6.3b",
            "desc": "Marine GIS basics",
            "info": "**Content:**\n(i) Features and feature types of \npoint, line and polygon with \nmarine examples.\n(ii) Marine and coastal data bases\n(iii) Coordinate reference system\n(iv) Vertical datums\n(v) Survey metadata\n(vi) Base maps and images\n\n**Learning Outcomes:**\nExplain the concept and use of \nGeographical Information Systems (GIS) \nwithin the marine environment.\nCreate a GIS project using marine spatial \ndata. \nMerge and mash up data sets of different \norigin by applying datum and projection \ntransformations."
        },
        {
            "type": "I",
            "id": "E6.3c",
            "desc": "Visualization and presentation",
            "info": "**Content:**\n(i) Symbology\n(ii) Use of color schemes\n(iii) Shading and illumination\n(iv) Resolution\n(v) Vertical scale / exaggeration\n\n**Learning Outcomes:**\nConfigure elements of a viewing package \nto highlight features of interest within a \nhydrographic data set."
        },
        {
            "type": "I",
            "id": "E6.3d",
            "desc": "Deliverables",
            "info": "**Content:**\n(i) Products provided directly from source data such as sounding data files and metadata. (ii) Feature databases such as wrecks, rocks and obstructions (iii) Data required for sailing directions, light lists, port guides and notices to mariners. (iv) Data required for offshore hazards and anomalies survey (v) Digital and paper products derived from source data for various survey types and usage such as GIS and CAD files and/or geo-referenced images. (vi) Reports on quality control, procedures, results and conclusions detailing processes adopted within survey operations and data processing. vii) Product standards including: \n\uf0b7 IHO S-100 and product \nstandards such as S-102.\n\uf0b7 Standard Seabed Data \nModel (SSDM).\n\n**Learning Outcomes:**\nDescribe hydrographic deliverables and produce paper products as well as digital products in accordance with specifications and standards. Prepare a report on a hydrographic survey"
        },
        {
            "type": "H",
            "desc": "E7: Environment"
        },
        {
            "type": "I",
            "id": "E7.1a",
            "desc": "Physical properties of sea water",
            "info": "**Content:**\n(i) Units used in measuring and \ndescribing physical properties \nof sea water, normal ranges \nand relationships including: \nsalinity, conductivity, \ntemperature, pressure, density. \n(ii) Oceanographic sampling and \nmethods for measuring \ncommon oceanographic \nparameters and profiles\n(iii) oceanographic sensors (e.g. \nfor temperature, conductivity, \nand depth) and need for \ncalibration\n\n**Learning Outcomes:**\nUse oceanographic sensors to measure \nphysical properties of sea water and \ncompute speed of sound using observed \nphysical properties of sea water."
        },
        {
            "type": "I",
            "id": "E7.1b",
            "desc": "Oceanographic measurements",
            "info": "**Learning Outcomes:**\nSet up, test and verify oceanographic \nsurvey sensors to meet specifications."
        },
        {
            "type": "I",
            "id": "E7.1c",
            "desc": "Waves",
            "info": "**Content:**\n(i) Wave parameters and elements \ninvolved in the wave growth \nprocess including fetch and \nbathymetry\n(ii) Breaking waves, long-shore \ndrift and rip current processes.\n\n**Learning Outcomes:**\nOutline wave generation processes and \ndiscuss mitigation tactics against the \nimpact of waves in planning survey \noperations."
        },
        {
            "type": "I",
            "id": "E7.2a",
            "desc": "Seabed characteristics",
            "info": "**Content:**\n(i) Seabed samplers such as grabs, \ncorers and dredges and basic \nsediment types.\n(ii) Types of seabed\n(iii) Processes involved in seabed \ndynamics\n\n**Learning Outcomes:**\nExplain the objectives of seabed sampling \ndetailing sampling equipment and how \nsamples are stored and analyzed."
        },
        {
            "type": "I",
            "id": "E7.2b",
            "desc": "Magnetic surveys",
            "info": "**Content:**\n(i) Magnetic fields and anomalies\n(ii) Objectives of magnetic \nsurveys to detect pipelines, \ncables and ordnance. \n(iii) Magnetometers\n\n**Learning Outcomes:**\nDescribe Earth\u2019s magnetic field and \nexplain the use of magnetometers and the \nobjectives of magnetic surveys."
        },
        {
            "type": "I",
            "id": "E7.2c",
            "desc": "Seismic surveys",
            "info": "**Content:**\n(i) Continuous \nreflection/refraction seismic \nprofiling. \n(ii) Typical sound sources, \nreceivers and recorders.\n(iii) High resolution seismic \nsystems\n(iv) Sub-bottom profilers\n\n**Learning Outcomes:**\nExplain the objectives of seismic surveys \nand the equipment used to conduct such \nsurveys."
        },
        {
            "type": "I",
            "id": "E7.3a",
            "desc": "Impact of surveys",
            "info": "**Content:**\ni) Permanent and temporary \nthreshold shifts (hearing) for \nmarine mammals.\n(ii) Use of physical techniques \nsuch as bar sweeps in \nenvironmentally sensitive \nareas.\n(iii) Respect for cultural traditions \nin relation to use of the \nenvironment\n(iv) Marine protected areas\n\n**Learning Outcomes:**\nDescribe appropriate procedures and \nlimitations for use of surveying equipment \nin compliance with environmental laws \nand marine protected area regulations."
        }
    ]
};
