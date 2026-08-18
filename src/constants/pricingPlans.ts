const pricingPlans = [
    {
        title: "Personal",
        price: "$12.99",
        period: "/user",
        features: [
            "Free licensed icons",
            "Fast and free standard shipping",
            "No credit card required",
            "Friendly supports",
        ],
        isPopular: false,
        btnText: "Get Started",
        btnBg: "#EBF7F2",
        btnColor: "#111",
    },
    {
        title: "Professional",
        price: "$59.99",
        period: "/team",
        features: [
            "Full access to all features",
            "Fast and free standard shipping",
            "No credit card required",
            "Use on unlimited projects",
            "Team collaboration feature.",
            "Friendly supports",
        ],
        isPopular: true,
        btnText: "Get Started",
        btnBg: "#3AC279",
        btnColor: "#fff",
    },
    {
        title: "Enterprise",
        price: "$99.99",
        period: "/team",
        features: [
            "All features in Pro Plan.",
            "Use on unlimited projects",
            "Team collaboration feature.",
            "Friendly supports",
        ],
        isPopular: false,
        btnText: "Get Started",
        btnBg: "#EBF7F2",
        btnColor: "#111",
    },
];

export default pricingPlans;