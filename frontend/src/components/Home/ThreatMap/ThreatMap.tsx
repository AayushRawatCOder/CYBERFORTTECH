import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import styles from "./ThreatMap.module.scss";

export default function ThreatMap() {
  const globeEl = useRef<any>();

  const threats = [
    { lat: 9.145, lng: 40.4897, name: "Ethiopia", ip: "103.24.36.21", color: "#ef4444" },
    { lat: 28.3949, lng: 84.124, name: "Nepal", ip: "202.166.207.12", color: "#a855f7" },
    { lat: -0.7893, lng: 113.9213, name: "Indonesia", ip: "103.45.23.89", color: "#f59e0b" },
    { lat: 46.8625, lng: 103.8467, name: "Mongolia", ip: "202.170.70.55", color: "#10b981" },
    { lat: 14.0583, lng: 108.2772, name: "Vietnam", ip: "113.161.34.21", color: "#06b6d4" },
  ];

  const arcsData = threats.map(t => ({
    startLat: t.lat,
    startLng: t.lng,
    endLat: 37.7749,
    endLng: -122.4194,
    color: t.color,
  }));

  const categories = [
    { label: "OAS", color: "#10b981" },
    { label: "ODS", color: "#ef4444" },
    { label: "MAV", color: "#f59e0b" },
    { label: "WAV", color: "#3b82f6" },
    { label: "IDS", color: "#ec4899" },
    { label: "VUL", color: "#6b7280" },
    { label: "KAS", color: "#8b5cf6" },
    { label: "BAD", color: "#06b6d4" },
  ];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ altitude: 2.2 }, 1000);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>THREAT MAP</h1>
        <div className={styles.categories}>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={styles.categoryBtn}
              style={{ "--cat-color": cat.color } as React.CSSProperties}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.globeContainer}>
        <div className={styles.legend}>
          {threats.map((t, i) => (
            <div key={i} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ backgroundColor: t.color }} />
              <span className={styles.legendText}>{t.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.globeWrap}>
          <Globe
            ref={globeEl}
            width={900}
            height={900}
            backgroundColor="rgba(189, 176, 176, 0)"
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
            atmosphereColor="#3b3838"
            atmosphereAltitude={0.15}
            pointsData={threats}
            pointAltitude={0.02}
            pointRadius={0.8}
            pointColor={(d: any) => d.color}
            pointLabel={(d: any) => `<div style="background:rgba(213, 205, 205, 1);padding:8px 12px;border-radius:6px;backdrop-filter:blur(8px);border:1px solid ${d.color};color:#fff">
              <b>${d.name}</b><br/><small>${d.ip}</small>
            </div>`}
            arcsData={arcsData}
            arcColor={(d: any) => [d.color, d.color]}
            arcDashLength={0.4}
            arcDashGap={0.2}
            arcDashInitialGap={0.1}
            arcDashAnimateTime={2000}
            arcStroke={0.5}
            arcAltitude={0.3}
            arcsTransitionDuration={0}
          />
        </div>
      </div>
    </div>
  );
}