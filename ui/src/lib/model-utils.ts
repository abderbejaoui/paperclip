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
 * Adapters whose model list is hand-ordered (newest release of each family first, older
 * releases at the end). The model dropdown keeps their order; every other adapter's list is
 * still sorted by id, because a discovered list (Cursor's `agent models`) has no stable order.
 */
export function adapterCuratesModelOrder(adapterType: string): boolean {
  return adapterType === "claude_local";
}
