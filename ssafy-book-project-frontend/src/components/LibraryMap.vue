<!--구글맵 컴포넌트 (도전과제)-->

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapContainer = ref(null);
const props = defineProps({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  zoom: { type: Number, default: 15 },
});

const loadGoogleMaps = () => {
  return new Promise((resolve) => {
    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => resolve(window.google.maps);
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  const googleMaps = await loadGoogleMaps();

  const map = new googleMaps.Map(mapContainer.value, {
    center: { lat: props.lat, lng: props.lng },
    zoom: props.zoom,
  });

  new googleMaps.Marker({
    position: { lat: props.lat, lng: props.lng },
    map,
  });
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>
