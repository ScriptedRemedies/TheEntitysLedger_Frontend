// BASE URL for a community repo (Example: Techial's DBD Database)
const CDN_BASE_URL = "https://github.com/Techial/DBD-Database.git/API/v1/killer_perks";

export const CharacterPortrait = ({ imageId, name }: { imageId: string, name: string }) => {
    return (
        <img
            src={`${CDN_BASE_URL}${imageId}.png`}
            alt={name}
            className="character-portrait"
            // Add a fallback in case the link breaks
            onError={(e) => {
                e.currentTarget.src = "/images/fallback_placeholder.png";
            }}
        />
    );
};
