import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { BoardProvider } from './contexts/BoardContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import './index.css'
import { router } from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BoardProvider>
        <RouterProvider router={router} />
      </BoardProvider>
    </ThemeProvider>
  </StrictMode>,
)
