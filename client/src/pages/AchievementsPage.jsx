import AchievementsComponent from "../components/Achievements";

const achievements = [
    {
        title: "Best Innovation Award",
        description: "Received the Best Innovation Award at the National Tech Expo 2023 for our groundbreaking sensor technology.",
        image: "/achievements/innovation_award.jpg",
    },
    {
        title: "Top 10 Startups",
        description: "Recognized as one of the Top 10 Startups in India by TechCrunch India for our contributions to the sensor industry.",
        image: "/achievements/top_startup.jpg",
    }]

export default function AchievementsPage() {
    return (
        <div>
            <AchievementsComponent  />
        </div>
    );
}