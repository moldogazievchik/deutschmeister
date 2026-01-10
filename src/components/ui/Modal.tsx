import { Fragment, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
}: ModalProps) {
  if (!isOpen) return null;

  const sizeClass = `modal-${size}`;

  return (
    <Fragment>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="modal-container">
        <div
          className={cn('modal-content', sizeClass)}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="modal-header">
              {title && <h3 className="modal-title">{title}</h3>}
              {showCloseButton && (
                <button onClick={onClose} className="modal-close-btn">
                  <X style={{ width: '1.25rem', height: '1.25rem' }} />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </Fragment>
  );
}
