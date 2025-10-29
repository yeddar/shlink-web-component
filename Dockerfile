FROM mcr.microsoft.com/playwright:v1.56.0-noble

ENV NODE_VERSION 22.18
ENV TINI_VERSION v0.19.0

# Install Node.js
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash && \
    \. "$HOME/.nvm/nvm.sh" && \
    nvm install ${NODE_VERSION}

# Copy tini
COPY tini-amd64 /sbin/tini
RUN chmod +x /sbin/tini
# Set tini as the entry point, as node does not properly handle signals
ENTRYPOINT ["/sbin/tini", "--"]
