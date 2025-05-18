import useProfileContext from "../../Hooks/ProfileContext";
import LocationIcon from "../Icons/LocationIcon";
import LogoutButton from "../LogoutButton/LogoutButton";
import Card from "../ui/Card/Card";

const ProfileCard = () => {
  const context = useProfileContext();
  const profile = context?.profile || {};

  return (
    <Card as="article" className="profile-card">
      <div className="profile-card__image-container">
        <img
          className="profile-card__image"
          alt={`${profile.name}'s icon`}
          src={profile.image}
        />
      </div>
      <LogoutButton />
      <header className="profile-card__header">
        <h1 className="profile-card__name">
          {profile.firstName} {profile.lastName}
        </h1>
        <h2 className="profile-card__email">{profile.email}</h2>
        <address className="profile-card__location">
          <span className="profile-card__location-icon" aria-label="Ubicación">
            <LocationIcon />
          </span>
          {profile.address?.city} - {profile.address?.country}
        </address>
      </header>
      <section className="profile-card__details">
        <dl className="profile-card__details-list">
          <div className="profile-card__details-list-item">
            <dd>{profile.birthDate}</dd>
            <dt>Cumpleaños</dt>
          </div>
          <div className="profile-card__details-list-item">
            <dd>{profile.age}</dd>
            <dt>Edad</dt>
          </div>
          <div className="profile-card__details-list-item">
            <dd>{profile.phone}</dd>
            <dt>Teléfono</dt>
          </div>
        </dl>
      </section>
      <section className="profile-card__work">
        <h3>Trabajo y educación</h3>
        <dl className="profile-card__work-list">
          <div className="profile-card__work-item">
            <dt>Universidad:</dt>
            <dd>{profile.university}</dd>
          </div>
          <div className="profile-card__work-item">
            <dt>Compañía:</dt>
            <dd>{profile.company?.name}</dd>
          </div>
          <div className="profile-card__work-item">
            <dt>Departamento:</dt>
            <dd>{profile.company?.department}</dd>
          </div>
          <div className="profile-card__work-item">
            <dt>Puesto:</dt>
            <dd>{profile.company?.title}</dd>
          </div>
        </dl>
      </section>
    </Card>
  );
};

export default ProfileCard;
