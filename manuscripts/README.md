# Manuscripts Directory (Source of Truth)

This folder contains the **active source files** for the Ohu Legacy Codex.

## 📖 Manuscript Order

When `compile_codex.py` runs, it stitches these files together in the following logical order:

1.  **`Book_1_The_Foundation_Manuscript.md`**: Vision, Values, and Constitution.
2.  **`Book_2_The_Engine_Manuscript.md`**: Corporate Structure, Legal Entities, and Tax Strategy.
3.  **`Volume_III_The_Digital_Ecosystem_Manuscript.md`**: Digital Real Estate, AI, and Intelligence Layer.
4.  **`Book_3_The_Machine_Manuscript.md`**: Operations, SuiteDash, and Automation.
5.  **`Book_4_The_Bloodline_Manuscript.md`**: Governance, Succession, and Philanthropy.
6.  **`Book_5_The_Arsenal_Manuscript.md`**: (Reserved/Future Expansion).
7.  **`The_Fortress_Protocols_Manuscript.md`**: Risk Mitigation and Emergency Protocols.
8.  **`Glossary.md`**: Definitions of key terms.

## 🖼️ Images & Diagrams

*   All images are stored in the `images/` subdirectory.
*   Do not store loose image files in this root folder; keep them organized in `images/`.

## ⚠️ Editing Rules

*   **Edit here, not in the compiled file.**
*   Ensure all image links use the format: `![Description](./images/filename.svg)`.
*   After editing, run `python ../compile_codex.py` from the parent directory to update the master file.

