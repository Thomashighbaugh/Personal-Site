import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { FiCpu } from 'react-icons/all';

function OperationsModal() {
  return (
    <Popup
      trigger={<button className="modal-button"> <FiCpu size={70}/> </button>}
      modal
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <h3 className="header">Web Development</h3>

          <div className="content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Linux</h3>
              <li className="modal-list-item">Ubuntu</li>
              <li className="modal-list-item">RedHat/CentOS</li>
              <li className="modal-list-item">Arch</li>
              <li className="modal-list-item">Alpine</li>
              <li className="modal-list-item">Scripting</li>
              <li className="modal-list-item">Remote Administration</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Containers && VM</h3>
              <li className="modal-list-item">Docker</li>
              <li className="modal-list-item">LXC/LXD</li>
              <li className="modal-list-item">KVM + QEMU</li>
              <li className="modal-list-item">CoreOS && rkt</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Provisioning</h3>
              <li className="modal-list-item">Ansible</li>
              <li className="modal-list-item">Chef</li>
              <li className="modal-list-item">Terraform</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">
                Deployment && Orchestration
              </h3>
              <li className="modal-list-item">Kubernetes</li>
              <li className="modal-list-item">Docker Swarm</li>
              <li className="modal-list-item">Apache Mesos</li>
            </ul>
          </div>
          <br />
          <div className="actions">
            <Popup
              trigger={<button className="button"> Linux First </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Not only a Linux user, I have considerable experience
                customizing my Linux machines for my specific taste in a process
                often referred to as 'ricing'. I have considerable experience
                with the internals of Linux systems from using the kernel across
                systems and use cases for several years now. Check out my{' '}
                <a href="https://github.com/Thomashighbaugh/dotfiles">
                  dotfiles
                </a>{' '}
                for more about my Linux customizations and a taste of how deep
                this knowledge goes.{' '}
              </span>
            </Popup>
            <Popup
              trigger={<button className="button"> Provisioner </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Having reinstalled my OS a lot due to failed experimentation
                with various aspects of my system, I have a lot of experience
                focused on the setup process. I have utilized Ansible playbooks,
                Makefiles and various shell scripts I have written for purposes
                of restoring my machines to working order. Having settled on
                Makefiles due to the advantages they offer over shell scripts
                alone, which are packaged with my dotfiles to manage package
                installations.
              </span>
            </Popup>

            <Popup
              trigger={<button className="button"> Hardware Hacker </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Having spent years fixing personal and business computers for
                sustenance has imparted a specific focus in my efforts utilizing
                more professional machines and operating systems that prevents
                me from forgetting the underlaying machine and its components in
                bringing a system into production. Even in the most potent of
                modern server systems, hardware bottlenecks can create
                discrepancies with expected results and knowing what these are
                and how to address these is a perenially useful skill.
              </span>
            </Popup>
          </div>
        </div>
      )}
    </Popup>
  );
}
export default OperationsModal;
