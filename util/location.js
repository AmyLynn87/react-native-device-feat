// const GOOGLE_API_KEY = "AIzaSyCGqj_moO2A_KV46bv0NcsXBjSjnoesJQ4";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
