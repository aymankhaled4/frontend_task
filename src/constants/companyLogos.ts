import AmazonLogo from "@/assets/images/amazon.png";
import CraftLogo from "@/assets/images/craft.png";
import FeedlyLogo from "@/assets/images/feedly.png";
import GoogleFontsLogo from "@/assets/images/google-fonts.png";
import HopinLogo from "@/assets/images/hopin.png";
import ShopifyLogo from "@/assets/images/shopify.png";
import TwitchLogo from "@/assets/images/twitch.png";

const companyLogos = [
    {
        id: "amazon",
        src: AmazonLogo,
        alt: "Amazon",
        logoSize: "90%",
        sx: {
            left: { xs: "0%", md: "8%" },
            top: { xs: "20%", md: "40%" },
            width: { xs: 60, md: 95 },
        },
    },
    {
        id: "hopin",
        src: HopinLogo,
        alt: "Hopin",
        logoSize: "100%",
        sx: {
            left: { xs: "40%", md: "46%" },
            top: { xs: "-5%", md: "5%" },
            width: { xs: 45, md: 65 },
        },
    },
    {
        id: "twitch",
        src: TwitchLogo,
        alt: "Twitch",
        logoSize: "80%",
        sx: {
            right: { xs: "15%", md: "25%" },
            top: { xs: "5%", md: "18%" },
            width: { xs: 50, md: 80 },
        },
    },
    {
        id: "feedly",
        src: FeedlyLogo,
        alt: "Feedly",
        logoSize: "90%",
        sx: {
            left: { xs: "20%", md: "25%" },
            top: { xs: "5%", md: "15%" },
            width: { xs: 50, md: 70 },
        },
    },
    {
        id: "google",
        src: GoogleFontsLogo,
        alt: "Google",
        logoSize: "73%",
        sx: {
            right: { xs: "0%", md: "8%" },
            top: { xs: "20%", md: "45%" },
            width: { xs: 40, md: 65 },
        },
    },
    {
        id: "shopify",
        src: ShopifyLogo,
        alt: "Shopify",
        logoSize: "85%",
        sx: {
            right: { xs: "20%", md: "25%" },
            bottom: { xs: "5%", md: "15%" },
            width: { xs: 55, md: 75 },
        },
    },
    {
        id: "craft",
        src: CraftLogo,
        alt: "Craft",
        logoSize: "85%",
        sx: {
            left: { xs: "15%", md: "22%" },
            bottom: { xs: "5%", md: "18%" },
            width: { xs: 50, md: 75 },
        },
    },
];

export default companyLogos;