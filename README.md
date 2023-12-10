# HistoPathoBook: A React-based Histopathology E-book viewer

**The histopathology E-book application is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) based website application that allows users to view published e-books and view the high-resolution slide for each case study.**

The application consists of a collection of **E-books** where each e-book is a collection of **case studies**.

Each case study contains information about a particular type of cancer, both in textual form and the high-resolution image that can be viewed using the **Histopathology-viewer**.

## Backend Features

The backend was written using **Pocketbase,** and has the following collections

1. Categories: Stores all the categories of ebooks that are present
2. Ebooks: Stores all of the ebooks that are present across all categories
3. Authors: Stores the information about all the authors
4. Cases: Stores information about all of the case studies present across all ebooks

The case studies are loaded in using Pathomation UI. 

## Application Features

- Fully responsive and mobile friendly.
- Light and dark theme.
- Tag-based search for particular case studies.

## Histopathology Viewer

### Tools

Magic Wand - Automatically selects an object or area of choice in the image

- Brush - Fill area of choice and its area will be calculated
- Freehand - Draw a line freehand and its length will be calculated
- Freehand Polygon - Draw a freehand polygon and its area will be calculated
- Closed Freehand Polygon - similar to lasso tool, use it to draw on selected area and the area will be calculated
- Arrow tool - Draw an arrow to highlight a point of interest
- Point - Place a point on the slide to mark its location
- Line - Select two points and the distance between those two points is calculated
- Multipoint - Mark multiple points under the same annotation
- Subtract - All area of various annotations in the selected area will be removed. The boundaries of the annotations are changed and not removed completely.
- Addition - Combines multiple annotations to make one highlighted annotation.
- Transform - modify the dimensions of the annotations
- Color Picker - Change the colors of the annotations

### Features

- Overview Window - A small window showing the slide and which section of the slide the user is currently zoomed in on. The window can be moved around.
- Rotation Controls - Rotate the slides
- Scale Line - Shows the current scale at which the user's zoom is.
- Snapshot Options - Take a snapshot of the current view of the slide along with the annotations.
- Realtime Filter Controls - Control filter options such as brightness, color balance, contrast and gamma of the image. These changes are visible in real time and will be visible in the snapshot taken.
- Zoom Slider - Shows the current zoom on the image
- Toggle Annotations and Measurements
- Save - Save the currently made annotations

## Requirements

- Node.js
- NPM

## Quick Start Guide

### Backend

1. Start the backend using

   ```
   ./pocketbase serve
   ```
2. The server will start running at `http://127.0.0.1:8090` and the two links will be given

   ```
   ├─ REST API: http://127.0.0.1:8090/api/
   └─ Admin UI: http://127.0.0.1:8090/_/
   ```
3. Use the **Admin UI** link to access the backend.
4. Here, you can add categories, ebooks, cases and authors using the UI, and the changes will be reflected in the frontend accordingly.

### Frontend

1. Run npm install

```bash
npm install
```

2. After installation is done run npm start

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
