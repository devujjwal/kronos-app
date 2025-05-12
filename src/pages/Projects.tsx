import LoggedInLayout from "@/components/LoggedInLayout";
import styles from "@/styles/projects.module.scss";
import usePageTitle from "@/hooks/usePageTitle";

const Projects = () => {
  usePageTitle("Projects");

  return (
    <LoggedInLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <input
            className={styles.search}
            type="text"
            placeholder="Search videos and folders"
          />
        </div>

        {/* Folders */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Folders</h3>
            <button className={styles.actionBtn}>
              <span className="material-icons">create_new_folder</span> New
              Folder
            </button>
          </div>
          <div className={styles.cardGrid}>
            {["MSME Awards", "Folder 2", "Folder 3"].map((title, i) => (
              <div key={i} className={styles.folderCard}>
                <div className={styles.folderHeader}>
                  <span className="material-icons">folder</span>
                  <span>{title}</span>
                  <span className={`material-icons ${styles.moreIcon}`}>
                    more_vert
                  </span>
                </div>
                <div className={styles.date}>May 01 2025, 12:37 PM</div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Videos</h3>
            <button className={styles.actionBtn}>
              <span className="material-icons">video_call</span> Create New
              Video
            </button>
          </div>
          <div className={styles.cardGrid}>
            {[
              {
                title: "Promotional Video for MSME Awards",
                status: "Processing",
                image: "/img/placeholder1.jpg",
              },
              {
                title: "Tutorial Video for New Tool",
                duration: "56 secs",
                image: "/img/placeholder2.jpg",
              },
              {
                title: "Upcoming Phone Launch",
                duration: "1 min 23 secs",
                image: "/img/placeholder3.jpg",
              },
            ].map((video, i) => (
              <div key={i} className={styles.videoCard}>
                <div className={styles.thumbnail}>
                  <img src={video.image} alt={video.title} />
                  {video.status && (
                    <span className={styles.statusBadge}>{video.status}</span>
                  )}
                  {video.duration && (
                    <span className={styles.duration}>{video.duration}</span>
                  )}
                </div>
                <div className={styles.videoInfo}>
                  <div className={styles.titleRow}>
                    <span>{video.title}</span>
                    <span className={`material-icons ${styles.moreIcon}`}>
                      more_vert
                    </span>
                  </div>
                  <span className={styles.date}>May 01 2025, 12:37 PM</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoggedInLayout>
  );
};

export default Projects;
