export function extractProviderId(modelId: string): string | null {
  const trimmed = modelId.trim();
  if (!trimmed.includes("/")) return null;
  const provider = trimmed.slice(0, trimmed.indexOf("/")).trim();
  return provider || null;
}

export function extractProviderIdWithFallback(modelId: string, fallback = "other"): string {
  return extractProviderId(modelId) ?? fallback;
}

export function extractModelName(modelId: string): string {
  const trimmed = modelId.trim();
  if (!trimmed.includes("/")) return trimmed;
  return trimmed.slice(trimmed.indexOf("/") + 1).trim();
}

/**
 * Adapters whose model list comes from runtime discovery with no stable order (Cursor's
 * `agent models` output can change between refreshes). The model dropdown sorts these by id.
 * Every other adapter hand-orders its list (Claude and Codex by family and version, Gemini with
 * `Auto` first, ...), and the dropdown shows that list as the adapter advertises it.
 */
export function adapterModelOrderIsDiscovered(adapterType: string): boolean {
  return adapterType === "cursor";
}
