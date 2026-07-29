import {
  Bell,
  Bot,
  Check,
  Globe2,
  Image as ImageIcon,
  Languages,
  Mail,
  MapPin,
  MessageSquare,
  MousePointer2,
  Play,
  Search,
  Send,
  Sparkles,
  Users,
  Video
} from "lucide-react";
import type { ProjectId } from "../../types/portfolio";

type ProjectVisualProps = {
  projectId: ProjectId;
  large?: boolean;
};

function PersonifyVisual() {
  return (
    <div className="visual-board personify-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Journey / summer-loyalty</span>
        <span className="visual-status-pill">Draft</span>
      </div>
      <div className="journey-surface">
        <span className="journey-connector connector-a" />
        <span className="journey-connector connector-b" />
        <span className="journey-connector connector-c" />
        <div className="journey-step journey-trigger">
          <MousePointer2 size={14} aria-hidden="true" />
          <span>Product viewed</span>
          <small>Customer signal</small>
        </div>
        <div className="journey-step journey-audience">
          <Users size={14} aria-hidden="true" />
          <span>High intent</span>
          <small>Segment matched</small>
        </div>
        <div className="journey-step journey-agent">
          <Bot size={14} aria-hidden="true" />
          <span>Draft with AI</span>
          <small>Human review</small>
        </div>
        <div className="journey-channels">
          <span>
            <Mail size={13} aria-hidden="true" />
          </span>
          <span>
            <MessageSquare size={13} aria-hidden="true" />
          </span>
          <span>
            <Bell size={13} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>3 channels</span>
        <span>Reusable journey</span>
        <span className="insight-live">
          <i />
          Valid
        </span>
      </div>
    </div>
  );
}

function StorefrontVisual() {
  return (
    <div className="visual-board storefront-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Tenant preview</span>
        <span className="tenant-switcher">
          <i className="tenant-one" />
          <i className="tenant-two" />
          <i className="tenant-three" />
        </span>
      </div>
      <div className="storefront-shell">
        <div className="storefront-nav">
          <span className="storefront-logo">ÉLAN</span>
          <span>New</span>
          <span>Skin</span>
          <span>Stories</span>
          <Search size={13} aria-hidden="true" />
        </div>
        <div className="storefront-hero">
          <div>
            <small>THE SUMMER EDIT</small>
            <strong>Skin, simplified.</strong>
            <span>Discover</span>
          </div>
          <div className="product-silhouette">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="storefront-products">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="performance-chip">
        <Globe2 size={13} aria-hidden="true" />
        Edge delivered
        <strong>10+ tenants</strong>
      </div>
    </div>
  );
}

function VibeLabsVisual() {
  return (
    <div className="visual-board vibelabs-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">VibeLabs / creative run</span>
        <span className="visual-status-pill ai-pill">
          <Sparkles size={11} aria-hidden="true" />
          Generating
        </span>
      </div>
      <div className="ai-workspace">
        <div className="ai-input-card">
          <div className="product-orb">
            <i />
          </div>
          <span>Hydration serum</span>
          <small>Summer campaign · Gen Z</small>
          <span className="visual-button">
            <Sparkles size={12} aria-hidden="true" />
            Improve intent
          </span>
        </div>
        <div className="ai-flow-line">
          <i />
        </div>
        <div className="ai-output-grid">
          <div className="ai-output copy-output">
            <span>
              <MessageSquare size={13} aria-hidden="true" />
              Copy
            </span>
            <i />
            <i />
            <i />
            <small>
              <Check size={10} aria-hidden="true" />
              Ready to review
            </small>
          </div>
          <div className="ai-output image-output">
            <span>
              <ImageIcon size={13} aria-hidden="true" />
              Image
            </span>
            <div className="generated-image">
              <i />
            </div>
          </div>
          <div className="ai-output video-output">
            <span>
              <Video size={13} aria-hidden="true" />
              Video
            </span>
            <div className="video-frame">
              <Play size={14} fill="currentColor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>One product brief</span>
        <span>Multi-format output</span>
        <strong>80% faster</strong>
      </div>
    </div>
  );
}

function HydrafacialVisual() {
  return (
    <div className="visual-board hydrafacial-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Find a provider</span>
        <span className="visual-status-pill location-pill">
          <Languages size={11} aria-hidden="true" />
          EN / 29+
        </span>
      </div>
      <div className="locator-shell">
        <div className="locator-search">
          <Search size={13} aria-hidden="true" />
          <span>Pune, Maharashtra</span>
          <span className="visual-button icon-only">
            <Send size={12} aria-hidden="true" />
          </span>
        </div>
        <div className="map-art">
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-road road-three" />
          <span className="map-block block-one" />
          <span className="map-block block-two" />
          <span className="map-block block-three" />
          <span className="map-pin pin-one">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="map-pin pin-two">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="map-pin pin-three">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
        </div>
        <div className="provider-card">
          <span className="provider-image" />
          <span>
            <strong>Glow Clinic</strong>
            <small>1.8 km · Open today</small>
          </span>
          <span className="visual-button">
            View
          </span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Location aware</span>
        <span>API validated</span>
        <strong>29+ languages</strong>
      </div>
    </div>
  );
}

export function ProjectVisual({ projectId, large = false }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual-${projectId}${large ? " project-visual-large" : ""}`}
      role="img"
      aria-label={`Abstract interface visualization for the ${projectId} case study`}
    >
      {projectId === "personify" ? <PersonifyVisual /> : null}
      {projectId === "storefront" ? <StorefrontVisual /> : null}
      {projectId === "vibelabs" ? <VibeLabsVisual /> : null}
      {projectId === "hydrafacial" ? <HydrafacialVisual /> : null}
    </div>
  );
}
