import React, { useState } from "react";
import "./App.css";
import "./design-system.css";

/**
 * Lightweight note organizer main app layout.
 * Uses provided design-system.css for color, tokens, and major layout classes.
 */

// --- Top navigation bar ---
function TopNav({ onCreate }) {
  return (
    <nav
      className="ds-horizontal"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--color-2f80ed)", // Blue header
        color: "var(--color-f2f2f2)",
        padding: "18px 36px 18px 36px",
        minHeight: 64,
        boxShadow: "var(--shadow-1)",
      }}
    >
      <div style={{ fontWeight: 900, fontSize: 32, letterSpacing: -1, fontFamily: "var(--font-main)" }}>
        Noted
      </div>
      <button
        className="ds-radius-12 ds-txt-white"
        style={{
          background: "var(--color-1947e5)",
          color: "var(--color-ffffff)",
          border: "none",
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: 18,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(25,71,229,0.05)",
        }}
        onClick={onCreate}
      >
        + New Note
      </button>
    </nav>
  );
}

// --- Sidebar as note list ---
function Sidebar({ notes, onSelect, selectedId }) {
  return (
    <aside
      className="ds-vertical"
      style={{
        minWidth: 260,
        background: "var(--color-f9f3e5)",
        borderRight: "2px solid var(--color-33322e)",
        padding: "34px 0 34px 0",
        height: "calc(100vh - 64px)", // Full height minus header
        overflowY: "auto",
      }}
    >
      <div
        className="ds-title-todo"
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "var(--color-33322e)",
          marginBottom: 18,
          paddingLeft: 24,
        }}
      >
        Notes
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              marginBottom: 6,
              marginRight: 6,
              background: selectedId === note.id ? "var(--color-fff0ee)" : "transparent",
              borderRadius: "var(--radius-6)",
              fontWeight: 500,
              fontSize: 18,
              padding: "10px 22px",
              color: "var(--color-33322e)",
              cursor: "pointer",
              borderLeft: selectedId === note.id ? "5px solid var(--color-2f80ed)" : "5px solid transparent"
            }}
            onClick={() => onSelect(note.id)}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

// --- Main notes area (intro, list, or detail/edit) ---
function MainArea({ selectedNote, mode }) {
  // For demonstration, hardcoded template for Introduction (screen_5-1.html equivalent)
  if (!selectedNote) {
    return (
      <main
        style={{
          flex: 1,
          background: "var(--color-2f80ed)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ds-container" style={{ paddingTop: 100, maxWidth: 1230 }}>
          <h1 className="ds-title-introduction" style={{ marginBottom: 45 }}>
            👋🏼 Introduction
          </h1>
          <div
            className="ds-desc-introduction"
            style={{ maxWidth: 1230, marginBottom: 64, lineHeight: 1.4 }}
          >
            Noted is an open Figma file for the design community.<br /><br />
            It has been curated for people who can’t do without taking notes.<br /><br />
            You can duplicate this entire file and make it your own.<br />
            The templates have been crafted keeping in mind the various todo use cases.
          </div>
          <div className="ds-feedback" style={{ fontSize: 20 }}>
            Feedback:{" "}
            <a
              href="https://twitter.com/_aakarshna"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-f2f2f2)",
                textDecoration: "underline",
              }}
            >
              twitter.com/_aakarshna
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Render a basic note "detail/edit" view or screen template
  return (
    <main style={{ flex: 1, padding: "48px 0", minHeight: "calc(100vh - 64px)", background: "var(--color-f6a89e)", overflow: "auto" }}>
      <div className="ds-container" style={{ maxWidth: 606 }}>
        <div className="ds-box ds-shadow-0" style={{ maxWidth: 606 }}>
          <div style={{ marginBottom: 30 }}>
            <div className="ds-title-todo" style={{ marginTop: 12, marginBottom: 8, textAlign: "center" }}>
              {selectedNote.title}
            </div>
            <div className="ds-divider" style={{ borderBottomStyle: "solid", borderBottomWidth: 4, borderBottomColor: "var(--color-33322e)", margin: "8px 0" }}></div>
          </div>
          <div className="ds-vertical" style={{ gap: 12 }}>
            {/* Render note content as (for now) static. Will be made editable in future step */}
            <div style={{ fontSize: 18, color: "var(--color-878787)", padding: "0 8px" }}>
              {selectedNote.content}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- Main App Component ---
/**
 * PUBLIC_INTERFACE
 * The root component, providing main layout: nav, sidebar, and main note area.
 */
function App() {
  // STATE: notes and selection (mock data for now)
  const [notes, setNotes] = useState([
    { id: 1, title: "Template: Daily Schedule", content: "9:00-10:00 Select and press ⌘D to duplicate\n..." },
    { id: 2, title: "Template: Things to do", content: "Select and press ⌘D to duplicate\nTask completed\n..." },
  ]);
  const [selectedId, setSelectedId] = useState(null);

  // NOTE: "mode" could be 'view', 'edit', 'create' in future extension
  // (for now, just display Intro or a static note)
  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--color-f2f2f2)",
      display: "flex",
      flexDirection: "column",
    }}>
      <TopNav onCreate={() => setSelectedId(null)} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar notes={notes} onSelect={setSelectedId} selectedId={selectedId} />
        <MainArea
          selectedNote={notes.find((n) => n.id === selectedId)}
          mode={selectedId ? "view" : "intro"}
        />
      </div>
    </div>
  );
}

export default App;
