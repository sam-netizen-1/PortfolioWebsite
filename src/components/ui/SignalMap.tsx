import { Bot, Mail, MessageSquare, Radio, Users } from "lucide-react";

export function SignalMap() {
  return (
    <div
      className="signal-map"
      role="img"
      aria-label="A commerce signal map connecting customer events, audience segments, campaign journeys, and delivery channels"
    >
      <div className="signal-map-toolbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>commerce_signal.map</span>
        <span className="live-indicator">
          <i />
          Live
        </span>
      </div>

      <div className="signal-canvas">
        <div className="signal-orbit orbit-one" />
        <div className="signal-orbit orbit-two" />
        <div className="signal-beam beam-one" />
        <div className="signal-beam beam-two" />

        <div className="signal-node node-source">
          <Radio size={16} aria-hidden="true" />
          <span>Customer signals</span>
          <small>events · intent</small>
        </div>

        <div className="signal-node node-segment">
          <Users size={16} aria-hidden="true" />
          <span>Segments</span>
          <small>who · why</small>
        </div>

        <div className="signal-core">
          <span>SK</span>
          <small>frontend systems</small>
          <i />
        </div>

        <div className="signal-node node-journey">
          <Bot size={16} aria-hidden="true" />
          <span>Journeys</span>
          <small>logic · AI</small>
        </div>

        <div className="signal-node node-channel">
          <span className="channel-icons">
            <Mail size={14} aria-hidden="true" />
            <MessageSquare size={14} aria-hidden="true" />
          </span>
          <span>Experience</span>
          <small>email · web · push</small>
        </div>
      </div>

      <div className="signal-map-footer">
        <span>
          <i className="status-good" />
          Fast
        </span>
        <span>
          <i className="status-good" />
          Resilient
        </span>
        <span>
          <i className="status-warm" />
          Human-reviewed
        </span>
      </div>
    </div>
  );
}
