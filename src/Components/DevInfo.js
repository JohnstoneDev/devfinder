export const UserNotFound = () => {
  return (
    <div className="display devinfo">
      <section className="p-2">
        <h2 className="text-button"> User Not Found! </h2>
      </section>
    </div>
  )
}

export const DevInfo = ({
   login, name, avatar_url, public_repos, followers,
   following, company, twitter_username, bio, created_at, location, blog }) => {

  return (
    <div className="devinfo">
      <div className="info">
        <div className="hero">
            <img src={avatar_url} alt="avatar" className="avatar"/>
            <section className="intro">
              <article>
                <h1 className="font-extrabold text-section">{name}</h1>
                <h3 className="text-blue dark:text-pinkish">@{login}</h3>
                <h5>Joined {new Date(created_at).toLocaleDateString()}</h5>
              </article>
              <p>{bio}</p>
            </section>
        </div>

        <div className="rest">
          <div className="social-info">
            <article>
              <p>Repos</p>
              <h4>{public_repos}</h4>
            </article>
            <article>
              <p>Followers</p>
              <h4>{followers}</h4>
            </article>
            <article>
              <p>Following</p>
              <h4>{following}</h4>
            </article>
          </div>

          <div className="links">
            <article>
              <ion-icon name="location-sharp"></ion-icon>
              <p>{location || "Not Available"}</p>
            </article>

            <article>
              <ion-icon name="logo-twitter"></ion-icon>
              <p>{twitter_username || "Not Available" }</p>
            </article>

            <article>
              <ion-icon name="link-sharp"></ion-icon>
              <p>{blog || "Not Available"}</p>
            </article>

            <article>
              <ion-icon name="business-sharp"></ion-icon>
              <p>{company || "Not Available"}</p>
            </article>
          </div>

          </div>
        </div>
    </div>
  )
}
