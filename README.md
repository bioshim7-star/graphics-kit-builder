# MX Studio — Renderer Upgrade Starter

This is a rendering module starter with demo panels, not an integrated KTM model or a complete decal editor.

## Run
```bash
npm install
npm run dev
```
Build:
```bash
npm run build
```

## Integration
- Copy `src/renderer` and `src/materials` into your existing app.
- Wrap the motorcycle scene with `RendererCanvas`.
- Replace `DemoPanels` with a licensed KTM 150 EXC 2025 GLB model.
- Split the model into separately named plastic meshes in Blender (`front_fender`, `rear_fender`, `left_shroud`, `right_shroud`, side panels, number plate, fork guards).
- Ensure clean UVs, applied transforms, correct normals, and adequate texel density.
- Mount each `VinylDecal` as a child of the target panel mesh, and set its transform in that panel's local coordinates.

## HDRI
The starter uses Drei's `studio` preset. For production, self-host a licensed HDR/EXR file and replace:
```tsx
<Environment preset="studio" resolution={1024}/>
```
with:
```tsx
<Environment files="/hdri/studio_2k.hdr" background={false}/>
```
Put the HDR file in `public/hdri/`.

## Decals: preview vs print
Projected `Decal` geometry is suitable for interactive placement previews. For production printing, bake the final composition into each panel's UV texture atlas. Preserve vector source files or 4K/8K raster assets for export; projected decals alone are not a reliable print pipeline.

## Materials
`PbrPlasticMaterial` expects five texture files in `public/textures/`:
- base color (sRGB)
- roughness (non-color)
- metalness (non-color)
- tangent-space normal (non-color)
- ambient occlusion (non-color)

Replace the sample texture paths with your own authored maps. The same texture convention applies to other materials.

## Tone mapping
This project sets the WebGL renderer to `NoToneMapping` and applies ACES once at the end of the postprocessing chain. Do not also enable renderer ACES, or the result will be tone-mapped twice.

## Production requirements
A photorealistic renderer cannot fix inaccurate geometry. Use a correctly licensed, high-quality motorcycle GLB with independent plastic meshes, good UVs, and authored PBR maps. Profile on target devices; use lower HDRI resolution and DPR on mobile.
