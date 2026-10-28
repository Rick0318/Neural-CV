import { CVData, defaultCVData } from '../types/cv';

const STORAGE_KEY = 'neural-cv-data';

export function saveCV(data: CVData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving CV data:', e);
  }
}

export function loadCV(): CVData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultCVData };
    const parsed = JSON.parse(raw) as Partial<CVData>;
    // Merge with defaults to handle new fields added after initial save
    return {
      ...defaultCVData,
      ...parsed,
      profile: { ...defaultCVData.profile, ...(parsed.profile || {}) },
      about: { ...defaultCVData.about, ...(parsed.about || {}) },
      visibleSections: { ...defaultCVData.visibleSections, ...(parsed.visibleSections || {}) },
      sectionTitles: { ...defaultCVData.sectionTitles, ...(parsed.sectionTitles || {}) },
      experience: parsed.experience || [],
      education: parsed.education || [],
      skills: parsed.skills || [],
      projects: parsed.projects || [],
      certifications: parsed.certifications || [],
      languages: parsed.languages || [],
      additional: parsed.additional || [],
    };
  } catch (e) {
    console.error('Error loading CV data:', e);
    return { ...defaultCVData };
  }
}

export function clearCV(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportBackup(data: CVData): void {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `neural-cv-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importBackup(file: File): Promise<CVData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as CVData;
        resolve(data);
      } catch {
        reject(new Error('Archivo JSON inválido'));
      }
    };
    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsText(file);
  });
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
