import LoggedInLayout from "@/components/LoggedInLayout";
import styles from "@/styles/create-video.module.scss";
import usePageTitle from "@/hooks/usePageTitle";
import { useState } from "react";

const aspectRatios = [
  { label: "9:16", description: "1080 x 1920, Vertical" },
  { label: "16:9", description: "1920 x 1080, Landscape" },
  { label: "1:1", description: "1080 x 1080, Square" },
  { label: "4:5", description: "1280 x 1024, Landscape" },
];

const avatars = [
  {
    name: "Dhruv Mohan",
    tags: "Tech, AI, Auto",
    image: "/img/placeholder1.jpg",
  },
  {
    name: "Nishtha Awasthi",
    tags: "Markets, News",
    image: "/img/placeholder2.jpg",
  },
  {
    name: "Neha Vashishth",
    tags: "Markets, Biz & Auto",
    image: "/img/placeholder3.jpg",
  },
  {
    name: "Meghna Chadha",
    tags: "Markets, News",
    image: "/img/placeholder2.jpg",
  },
];

const CreateVideo = () => {
  usePageTitle("Create Video");

  const [title, setTitle] = useState("New Untitled Video");
  const [editing, setEditing] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  return (
    <LoggedInLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          {!editing ? (
            <h1>
              {title}
              <span className="material-icons" onClick={() => setEditing(true)}>
                edit
              </span>
            </h1>
          ) : (
            <input
              className={styles.titleInput}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setEditing(false)}
              autoFocus
            />
          )}
          <p className={styles.timestamp}>Last Edited just now</p>
        </div>

        {/* Aspect Ratio */}
        <div className={styles.section}>
          <h3>Choose Aspect Ratio</h3>
          <div className={styles.grid}>
            {aspectRatios.map((item) => (
              <div
                key={item.label}
                className={`${styles.ratioCard} ${
                  selectedRatio === item.label ? styles.active : ""
                }`}
                onClick={() => setSelectedRatio(item.label)}
              >
                <span className="material-icons">
                  {item.label === "9:16" || item.label === "4:5"
                    ? "smartphone"
                    : "tablet"}
                </span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className={styles.section}>
          <h3>Select Avatar</h3>
          <div className={styles.avatarGrid}>
            <div className={styles.avatarCard}>
              <div className={styles.createAvatar}>
                <span className="material-icons">add_circle</span>
              </div>
              <p>Create your own Avatar</p>
            </div>

            {avatars.map((a, index) => (
              <div
                key={index}
                className={`${styles.avatarCard} ${
                  selectedAvatar === index ? styles.active : ""
                }`}
                onClick={() => setSelectedAvatar(index)}
              >
                <img src={a.image} alt={a.name} />
                <p className={styles.name}>{a.name}</p>
                <p className={styles.tags}>{a.tags}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          className={styles.generateBtn}
          disabled={!selectedRatio || selectedAvatar === null}
        >
          Generate Video <span className="material-icons">arrow_forward</span>
        </button>
      </div>
    </LoggedInLayout>
  );
};

export default CreateVideo;
